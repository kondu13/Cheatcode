'use client'

import { useRef } from 'react'
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import Link from 'next/link'
import Image from 'next/image'
// import { loadStripe } from '@stripe/stripe-js' 

// Make sure to replace with your actual Stripe public key
// const stripePromise = loadStripe('your_stripe_public_key')

export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // const handlePreOrder = async (e: React.MouseEvent) => {
  //   e.preventDefault()
  //   const stripe = await stripePromise
  //   // Call your backend to create a Checkout Session
  //   const response = await fetch('/api/create-checkout-session', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   const session = await response.json()
  //   // Redirect to Stripe Checkout
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   })
  //   if (result.error) {
  //     // Handle any errors from Stripe
  //     console.error(result.error)
  //   }
  // }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFFDF7] to-[#FFF8E7] text-black font-['Magdelin']">
      <header className="sticky top-0 z-50 bg-[#FFFDF7] shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">

            <div className='flex justify-between ' >
              <a href="/" className="text-2xl font-bold">CheatCode</a>
              <Image src="/images/logo.png" alt="logo" width={40} height={40}/>
            </div>

            <div className="space-x-4">
              <a href="#evidence" className="hover:underline">EVIDENCE</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#demo" className="hover:underline">DEMO PAGE</a>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/signup">
                <Button variant="outline" className="bg-black text-white hover:bg-gray-800">Sign Up</Button>
              </Link>
              <Link href="/signin">
                <Button variant="outline" className="bg-black text-white hover:bg-gray-800">Sign In</Button>
              </Link>
            </div>
            
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4">
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">The Cheat Code</h1>
          <p className="mb-6">RELEASING 5 YEARS OF SUNDAYS: It's GO TIME! Useful, with its UNFAIR 80/20 Vital Alpha Nuggets</p>
          <a href="#howitworks">
            <Button variant="outline" className="bg-black text-white hover:bg-gray-800 mr-4">HOW IT WORKS</Button>
          </a>
          <Button>LOGIN</Button>
        </section>

        <section id="about" className="py-12">
          <h2 className="text-2xl font-bold mb-4">WHERE IT BEGAN.</h2>
          <div className="bg-gray-200 p-4 rounded-lg mb-4">
            <p className="text-center">ABOUT ME VIDEO</p>
            <video 
              controls 
              className="w-full h-auto"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section id="howitworks" className="py-12">
          <h2 className="text-2xl font-bold mb-4">How does it work?</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Identifying Trapped Emotions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Emotion Code involves muscle testing to communicate with the subconscious mind, helping practitioners identify trapped emotions stemming from past traumas or unresolved feelings.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Using the Emotion Code Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A comprehensive chart lists 60 different emotions that can be trapped in the body. Practitioners use muscle testing to determine which specific emotions are affecting the individual’s well-being.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Releasing Emotions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Once identified, trapped emotions are released using a magnet or fingers along the governing meridian, accompanied by visualization techniques. This process promotes emotional freedom and holistic healing.</p>
              </CardContent>
            </Card>
          </div>
        </section>


        <section id="demo" className="py-12">
          <h2 className="text-2xl font-bold mb-4">The Demo</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            <video 
              ref={videoRef}
              controls 
              className="w-full h-auto"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="/path-to-your-demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>


        <section id="evidence" className="py-12">

          <h2 className="text-2xl font-bold mb-4">EVIDENCE...</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Evidence 1</h3>
              <p>Detailed description of evidence 1...</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Evidence 2</h3>
              <p>Detailed description of evidence 2...</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Evidence 3</h3>
              <p>Detailed description of evidence 3...</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Evidence 4</h3>
              <p>Detailed description of evidence 4...</p>
            </div>
          </div>

          <Link href="/evidence"> 
            <Button className="mt-4">Learn More</Button>
          </Link>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>What is The Cheat Code?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Cheat Code is a comprehensive program that helps you unlock your full potential by addressing trapped emotions, heart walls, and utilizing muscle testing techniques.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How does it work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our program combines proven techniques from various disciplines to help you identify and release emotional blockages, allowing you to achieve better mental and physical well-being.</p>
              </CardContent>
            </Card>
            <Card>
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
          <Card>
            <CardHeader>
              <CardTitle>Pre Order Now</CardTitle>
              <CardDescription>Get early access to The Cheat Code</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                // onClick={handlePreOrder} 
                className="w-full text-lg py-6"
                style={{ transform: 'scale(1.5)' }}
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

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Apply for Beta Access</h2>
          <div id="mc_embed_signup">
            <form action="https://your-mailchimp-form-url" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll" className="flex justify-center">
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL" className="sr-only">Email Address</label>
                  <input type="email" name="EMAIL" className="required email px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="mce-EMAIL" placeholder="Enter your email" />
                </div>
                <input type="submit" value="Apply" name="subscribe" id="mc-embedded-subscribe" className="button bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="p-4 text-center">
        <p>&copy; {new Date().getFullYear()} The Cheat Code. All rights reserved.</p>
      </footer>
    </div>
  )
}