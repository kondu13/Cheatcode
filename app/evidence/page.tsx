'use client'

import React, { useRef } from 'react'
import { ChevronDown, Bell, Settings, ArrowUp, User } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'

export default function EvidencePage() {
  const demoRef = useRef<HTMLElement>(null)

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E1] to-[#FFEFD5] text-[#8B4513]">
      <header className="sticky top-0 z-50 bg-[#FFDAB9] shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CheatCodeLOGO1-nrqzyDvPEi4bDDbjpidygdEYfpIVc2.png" alt="The Cheat Code Logo" width={40} height={40} />
              <div className="flex flex-wrap space-x-2 sm:space-x-4">
                <Link href="/">
                  <Button variant="ghost" className="text-sm sm:text-base">Home</Button>
                </Link>
                <Link href="#evidence">
                  <Button variant="ghost" className="text-sm sm:text-base">Evidence</Button>
                </Link>
                <Link href="#about">
                  <Button variant="ghost" className="text-sm sm:text-base">About</Button>
                </Link>
                <Button variant="ghost" className="text-sm sm:text-base" onClick={scrollToDemo}>Demo</Button>
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
                  <DropdownMenuItem>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/help">Help</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 sm:space-x-2">
                    <User className="h-5 w-5 sm:h-6 sm:w-6" />
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/signup">Sign Up</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/signin">Sign In</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Evidence</h1>
        
        <section className="mb-12">
          <div className="bg-[#FFDAB9] p-6 rounded-lg shadow-lg">
            <p className="text-center text-xl mb-4">Evidence Video</p>
            <video 
              controls 
              className="w-full h-auto rounded-lg shadow-md"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="/path-to-your-evidence-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Impact of Emotional Stress Release</h2>
          <p className="mb-4">
            Numerous studies have shown that releasing emotional stress can have a profound effect on human health and well-being. 
            Here, we present some of the key findings and provide space for inserting relevant medical studies and proof.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Studies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Study 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Insert details of a relevant medical study here...</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Study 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Insert details of another relevant medical study here...</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Expert Opinions</h2>
          <div className="space-y-4">
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Dr. Jane Smith, Neuroscientist</CardTitle>
              </CardHeader>
              <CardContent>
                <p>"Insert expert quote about the impact of emotional stress release on the brain..."</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Dr. John Doe, Psychologist</CardTitle>
              </CardHeader>
              <CardContent>
                <p>"Insert expert quote about the psychological benefits of emotional stress release..."</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>
            The evidence presented here strongly supports the profound effect of releasing emotional stress on human well-being. 
            From improved mental health to enhanced physical performance, the benefits are wide-ranging and significant.
          </p>
        </section>

        {/* Preorder section */}
        <section className="py-12">
          <Card className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Pre Order Now</CardTitle>
              <CardDescription className="text-white">Get early access to The Cheat Code</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full text-lg py-6 bg-[#8B4513] hover:bg-[#A0522D] text-white"
                style={{ transform: 'scale(1.1)' }}
              >
                Pre Order for $39
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <ul className="list-disc list-inside mt-4">
                <li>Access to all Cheat Code content</li>
                <li>Exclusive community access</li>
                <li>Weekly live Q&A sessions</li>
                <li>30-day money-back guarantee</li>
              </ul>
            </CardFooter>
          </Card>
        </section>
      </main>

      <section className="bg-[#FFDAB9] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Apply for Beta Access</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <form className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow rounded-r-none"
                />
                <Button type="submit" className="bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-l-none">
                  Apply
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#8B4513] text-white p-4 text-center mt-12">
        <p>&copy; {new Date().getFullYear()} The Cheat Code. All rights reserved.</p>
      </footer>

      {/* Fixed arrow on the middle right side */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
        <Button
          className="bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-full p-3 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </Button>
      </div>
    </div>
  )
}