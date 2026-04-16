"use client"

import { Activity, ChevronDown, HardDrive, RefreshCcw, Trash2, Zap } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

type Tab = "system" | "performance"

export function SystemDiagnostics() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tab>("performance")
  const [fps, setFps] = useState(0)
  const [domNodes, setDomNodes] = useState(0)
  const [resources, setResources] = useState(0)
  const [memoryText, setMemoryText] = useState("N/A")
  const [loadTime, setLoadTime] = useState(0)
  const [renderTime, setRenderTime] = useState(0)
  const mountAt = useRef(performance.now())

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let rafId = 0

    const tick = (now: number) => {
      frameCount += 1
      const delta = now - lastTime
      if (delta >= 1000) {
        setFps(Math.round((frameCount * 1000) / delta))
        frameCount = 0
        lastTime = now
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined
    if (nav) {
      setLoadTime(Number((nav.loadEventEnd / 1000).toFixed(2)))
    }
    setRenderTime(Number(((performance.now() - mountAt.current) / 1000).toFixed(2)))

    const infoTimer = window.setInterval(() => {
      setDomNodes(document.getElementsByTagName("*").length)
      setResources(performance.getEntriesByType("resource").length)
      setRenderTime(Number(((performance.now() - mountAt.current) / 1000).toFixed(2)))

      const perfWithMemory = performance as Performance & {
        memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number }
      }
      if (perfWithMemory.memory) {
        const usedMb = perfWithMemory.memory.usedJSHeapSize / (1024 * 1024)
        const limitGb = perfWithMemory.memory.jsHeapSizeLimit / (1024 * 1024 * 1024)
        setMemoryText(`${usedMb.toFixed(2)} MB / ${limitGb.toFixed(2)} GB`)
      }
    }, 1200)

    return () => {
      cancelAnimationFrame(rafId)
      window.clearInterval(infoTimer)
    }
  }, [])

  const fpsBar = useMemo(() => Math.min(100, Math.max(0, (fps / 60) * 100)), [fps])
  const memoryBar = useMemo(() => {
    const parts = memoryText.match(/([\d.]+) MB \/ ([\d.]+) GB/)
    if (!parts) return 0
    const used = Number(parts[1])
    const max = Number(parts[2]) * 1024
    return Math.min(100, Math.max(0, (used / max) * 100))
  }, [memoryText])

  const clearCache = async () => {
    localStorage.clear()
    sessionStorage.clear()
    if ("caches" in window) {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[70]">
      {open ? (
        <div className="mb-3 w-[320px] rounded-2xl border border-primary/40 bg-card/95 p-4 shadow-[0_15px_45px_-25px_rgba(249,115,22,0.8)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xl font-semibold leading-tight">System Diagnostics</p>
            <button
              type="button"
              aria-label="Close diagnostics"
              className="rounded-md p-1 text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              x
            </button>
          </div>

          <div className="mb-4 flex gap-2">
            <button
              type="button"
              className={`rounded-md px-3 py-1.5 text-sm ${tab === "system" ? "bg-primary text-primary-foreground" : "bg-background/60 text-muted-foreground"}`}
              onClick={() => setTab("system")}
            >
              System
            </button>
            <button
              type="button"
              className={`rounded-md px-3 py-1.5 text-sm ${
                tab === "performance" ? "bg-primary text-primary-foreground" : "bg-background/60 text-muted-foreground"
              }`}
              onClick={() => setTab("performance")}
            >
              Performance
            </button>
          </div>

          {tab === "performance" ? (
            <div className="space-y-3 text-sm">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-yellow-400" />FPS</span>
                  <span className="text-primary">{fps || 60}</span>
                </div>
                <div className="h-2 rounded-full bg-background/70">
                  <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-orange-500" style={{ width: `${fpsBar}%` }} />
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2"><HardDrive className="h-4 w-4 text-blue-400" />Memory Usage</span>
                  <span>{memoryText}</span>
                </div>
                <div className="h-2 rounded-full bg-background/70">
                  <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600" style={{ width: `${memoryBar}%` }} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2"><Activity className="h-4 w-4 text-purple-400" />DOM Nodes</span>
                <span>{domNodes}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between"><span>Timing: Page Load</span><span>{loadTime}s</span></div>
              <div className="flex items-center justify-between"><span>Resources</span><span>{resources}</span></div>
              <div className="flex items-center justify-between"><span>Render Time</span><span>{renderTime}s</span></div>
            </div>
          )}

          <div className="mt-4 flex gap-2">
            <Button type="button" variant="outline" className="flex-1" onClick={() => window.location.reload()}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refresh Page
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => {
                void clearCache()
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Cache
            </Button>
          </div>
        </div>
      ) : null}

      <Button type="button" className="rounded-xl border border-primary/60 bg-card/95 text-foreground" onClick={() => setOpen((p) => !p)}>
        <Activity className="mr-2 h-4 w-4 text-emerald-500" />
        Diagnostics
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
