"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPinIcon, MailIcon, PhoneIcon, SendIcon, CheckCircle } from "lucide-react"
import { Toaster, toast } from "sonner"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success toast with custom styling
      toast.success('Message sent successfully!', {
        duration: 3000,
        className: "bg-green-50",
        description: "Thank you for your message. I'll get back to you soon!",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)',
        },
      })

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast.error('Failed to send message', {
        duration: 3000,
        description: 'Please try again later.',
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)',
        },
      })
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      {/* Add Toaster component at the root */}
      <Toaster position="top-center" expand={true} richColors />
      
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent 
            bg-gradient-to-r from-[#00DFD8] via-[#007CF0] to-[#00DFD8]
            animate-gradient-xy bg-[length:200%_auto]">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00DFD8] via-[#007CF0] to-[#00DFD8] mx-auto mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center bg-card h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-8 text-card-foreground">Contact Information</h3>
                <div className="space-y-12">
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <MapPinIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-card-foreground">Location</h4>
                      <p className="text-muted-foreground">Rajkot, Gujarat, India</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <MailIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-card-foreground">Email</h4>
                      <p className="text-muted-foreground">rounakkeshri79@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <PhoneIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-card-foreground">Phone</h4>
                      <p className="text-muted-foreground">+91 8294341139</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="h-full">
              <CardContent className="p-6 bg-card h-full">
                <h3 className="text-xl font-bold mb-6 text-card-foreground text-center">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input text-foreground"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input text-foreground"
                    />
                  </div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input text-foreground"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-input text-foreground"
                  />
                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <SendIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

