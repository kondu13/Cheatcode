'use client'

import React, { useRef } from 'react'
import { ChevronDown, Bell, Settings, Send } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'
import ScrollToTop from '@/components/ui/ScrollToTop'

export default function LandingPage() {
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
                <Button variant="ghost" className="text-sm sm:text-base">Home</Button>
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

      <main className="container mx-auto px-4">
        <section className="py-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">The Cheat Code</h1>
          <p className="mb-6 text-xl sm:text-2xl">RELEASING EMOTIONAL BAGGAGE IN DAYS.  
It's SO POWERFUL, we think it's UNFAIR 
So, Want Alpha Access?</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-white text-lg sm:text-xl py-6 px-8">
              HOW IT WORKS
            </Button>
            <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-white text-lg sm:text-xl py-6 px-8">
              PRE-ORDER NOW
            </Button>
          </div>
        </section>

        <section id="about" className="py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">WHERE IT BEGAN</h2>
          <div className="bg-[#FFDAB9] p-6 rounded-lg shadow-lg">
            <p className="text-center text-xl mb-4">ABOUT ME VIDEO</p>
            <video 
              controls 
              className="w-full h-auto rounded-lg shadow-md"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section id="howitworks" className="py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">How Does It Work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white">
              <CardHeader>
                <CardTitle>Identifying Trapped Emotions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Emotion Code involves muscle testing to communicate with the subconscious mind, helping practitioners identify trapped emotions stemming from past traumas or unresolved feelings.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white">
              <CardHeader>
                <CardTitle>Using the Emotion Code Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A comprehensive chart lists 60 different emotions that can be trapped in the body. Practitioners use muscle testing to determine which specific emotions are affecting the individual's well-being.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white">
              <CardHeader>
                <CardTitle>Releasing Emotions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Once identified, trapped emotions are released using a magnet or fingers along the governing meridian, accompanied by visualization techniques. This process promotes emotional freedom and holistic healing.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="demo" ref={demoRef} className="py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">The Demo</h2>
          <div className="bg-[#FFDAB9] p-6 rounded-lg shadow-lg">
            <video 
              controls 
              className="w-full h-auto rounded-lg shadow-md"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="/path-to-your-demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section id="evidence" className="py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">EVIDENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Evidence 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed description of evidence 1...</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Evidence 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed description of evidence 2...</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Evidence 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed description of evidence 3...</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Evidence 4</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed description of evidence 4...</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/evidence">
              <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-white text-lg py-4 px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-6">
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>What is The Cheat Code?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Cheat Code is a comprehensive program that helps you unlock your full potential by addressing trapped emotions, heart walls, and utilizing muscle testing techniques.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>How does it work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our program combines proven techniques from various disciplines to help you identify and release emotional blockages, allowing you to achieve better mental and physical well-being.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFDAB9]">
              <CardHeader>
                <CardTitle>Is this backed by scientific research?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Yes, there are thousands of studies globally that demonstrate the impact of stress hormones throughout the body, their continued effects over the years, how different practices can rewire the brain, and for others, activate dormant systems in their body. Our approach is grounded in this extensive body of research.</p>
              </CardContent>
            </Card>
          </div>
        </section>

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

      <footer className="bg-[#8B4513] text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} The Cheat Code. All rights reserved.</p>
      </footer>

      <ScrollToTop />
    </div>
  )
}