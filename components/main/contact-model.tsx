'use client'

import { useState, useRef } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export default function ContactModal() {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    
    // Add required Web3Forms fields
    formData.append('from_name', formData.get('name') as string)
    formData.append('subject', 'New Contact Form Submission')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        formRef.current?.reset()
        setIsOpen(false)
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="hover:text-[rgb(112,66,248)] transition"
        >
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#0300147d] backdrop-blur-md border border-[#2A0E61] text-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white">Contact Me</DialogTitle>
          <p className="text-center text-gray-400">
            Fill out this form to send me a message. I will get back to you as soon as possible.
          </p>
        </DialogHeader>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input 
            type="hidden" 
            value="d31a6542-ac03-4f16-b468-2e906e822b98"
            name="access_key"
          />
          <div className="space-y-2">
            <Input
              name="name"
              placeholder="Your name"
              required
              className="bg-[#0300147d] border-[#2A0E61] text-gray-200 placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="bg-[#0300147d] border-[#2A0E61] text-gray-200 placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="Your message"
              required
              className="min-h-[100px] bg-[#0300147d] border-[#2A0E61] text-gray-200 placeholder:text-gray-400"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[rgb(112,66,248)] hover:bg-[rgb(92,46,228)] text-white"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

