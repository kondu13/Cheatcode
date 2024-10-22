'use client'

import React, { useState } from 'react'
import { Bell, ChevronDown, Settings, LogOut, CreditCard, User, Shield, Loader2, Send } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import DashboardCourseComponent from '@/components/ui/DashboardCourseComponent'
import courses from '@/constants/courses'
import Link from 'next/link'

export default function Dashboard() {
  const [isPaused, setIsPaused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isBillingOpen, setIsBillingOpen] = useState(false)
  const [isSecurityOpen, setIsSecurityOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { role: 'system', content: 'How can I assist you today?' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const router = useRouter();

  const handleStartSession = () => {
    setIsLoading(true)
    // Simulating a loading delay
    setTimeout(() => setIsLoading(false), 3000)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { role: 'user', content: inputMessage }])
      // Here you would typically send the message to your backend or AI service
      // For now, we'll just simulate a response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { role: 'system', content: 'Thank you for your message. How else can I help you?' }])
      }, 1000)
      setInputMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E1] to-[#FFEFD5] text-[#8B4513]">
      <nav className="flex flex-wrap justify-between items-center p-4 bg-[#FFDAB9] shadow-md">
        <div className="flex items-center space-x-4">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CheatCodeLOGO1-nrqzyDvPEi4bDDbjpidygdEYfpIVc2.png" alt="The Cheat Code Logo" width={40} height={40} />
          <div className="flex flex-wrap space-x-2 sm:space-x-4">
            <Button variant="ghost" className="text-sm sm:text-base">Dashboard</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm sm:text-base">Sessions <ChevronDown className="ml-1 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>New Session</DropdownMenuItem>
                <DropdownMenuItem>Past Sessions</DropdownMenuItem>
                <DropdownMenuItem>Session Types</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm sm:text-base">Community <ChevronDown className="ml-1 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Social Media</DropdownMenuItem>
                <DropdownMenuItem>Alpha Access</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="text-sm sm:text-base">Support</Button>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 sm:space-x-2">
                <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setIsProfileOpen(true)}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setIsBillingOpen(true)}>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setIsSecurityOpen(true)}>
                <Shield className="mr-2 h-4 w-4" />
                <span>Security</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={()=> router.push("/")}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <main className="container mx-auto mt-4 sm:mt-8 p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-center italic">
          "People say shortcuts do not exist until they find one" - Anonymous
        </h1>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <DashboardCourseComponent 
            key={index} // Ensure a unique key for each component
            id={course.id} 
            title={course.title} 
          />
        ))}
      </div>

        <div className="flex flex-col items-center space-y-4">
          <Link href='/dashboard/main-session'>
            <Button 
              onClick={handleStartSession}
              className="w-full sm:w-5/6 md:w-2/3 h-16 sm:h-20 md:h-24 text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#B8860B] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B8860B] text-white shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Start Main Session
            </Button>
          </Link>
          <Button 
            onClick={() => setIsPaused(!isPaused)}
            className="w-full sm:w-2/3 md:w-1/3 h-10 sm:h-12 text-base sm:text-lg md:text-xl font-semibold bg-[#8B4513] hover:bg-[#A0522D] text-white shadow-md"
          >
            {isPaused ? 'Resume Session' : 'Pause Session'}
          </Button>
        </div>
      </main>

      <Dialog open={isLoading} onOpenChange={setIsLoading}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Loading Session</DialogTitle>
            <DialogDescription>
              Please wait while we prepare your session...
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center h-24">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isSupportOpen} onOpenChange={setIsSupportOpen}>
        <DialogContent className="sm:max-w-[800px] h-[600px] flex flex-col">
          <DialogHeader>
            <DialogTitle>Support</DialogTitle>
            <DialogDescription>
              How can we help you today?
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow flex">
            <div className="w-1/2 pr-4 border-r">
              <h3 className="text-lg font-semibold mb-2">FAQ</h3>
              <ul className="space-y-2">
                <li>How do I start a session?</li>
                <li>What is emotional baggage?</li>
                <li>How can I access my account settings?</li>
              </ul>
            </div>
            <div className="w-1/2 pl-4 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Chat with Us</h3>
              <div className="flex-grow overflow-y-auto mb-4 space-y-2">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'} max-w-[80%]`}>
                    {message.content}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex">
                <Input
                  type="text"
                  placeholder="Type your message here..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit" className="ml-2">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Profile</DialogTitle>
            <DialogDescription>
              View and edit your profile information
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="John Doe" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" value="john@example.com" className="col-span-3" />
            </div>
          </div>
          <Button className="w-full">Save Changes</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isBillingOpen} onOpenChange={setIsBillingOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Billing</DialogTitle>
            <DialogDescription>
              Manage your subscription and payment methods
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex justify-between items-center">
              <span>Current Plan:</span>
              <span className="font-semibold">Premium</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Next Billing Date:</span>
              <span>July 1, 2023</span>
            </div>
          </div>
          <Button className="w-full" onClick={() => {
            // Here you would typically redirect to Stripe Checkout or Customer Portal
            console.log("Redirecting to Stripe...")
          }}>
            Manage Subscription
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isSecurityOpen} onOpenChange={setIsSecurityOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Security</DialogTitle>
            <DialogDescription>
              Manage your account security settings
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="current-password" className="text-right">
                Current Password
              </Label>
              <Input id="current-password" type="password"    className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-password" className="text-right">
                New Password
              </Label>
              <Input id="new-password" type="password" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="confirm-password" className="text-right">
                Confirm Password
              </Label>
              <Input id="confirm-password" type="password" className="col-span-3" />
            </div>
          </div>
          <Button className="w-full">Change Password</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}