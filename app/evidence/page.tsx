import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import Image from "next/image"
import Link from 'next/link'

export default function EvidencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFFDF7] to-[#FFF8E7] text-black font-['Montserrat']">
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
          <h1 className="text-4xl font-bold mb-4">Evidence</h1>
          <p className="mb-6 max-w-2xl mx-auto">
            Discover the scientific backing and real-world results that prove the effectiveness of The Cheat Code in releasing emotional baggage and improving overall well-being.
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6">Scientific Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Study 1</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 mb-4"></div>
                <p>Description of the study and its findings...</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Study 2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 mb-4"></div>
                <p>Description of the study and its findings...</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6">Expert Opinions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Dr. Jane Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 mx-auto"></div>
                <p>"Quote from Dr. Jane Smith about the effectiveness of emotional release techniques..."</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Prof. John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 mx-auto"></div>
                <p>"Quote from Prof. John Doe about the impact of The Cheat Code on mental health..."</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6">Case Studies</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sarah's Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 mb-4"></div>
                <p>Sarah's experience with The Cheat Code and how it transformed her life...</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mike's Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 mb-4"></div>
                <p>How Mike overcame years of emotional baggage using The Cheat Code...</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="p-4 text-center">
        <p>&copy; {new Date().getFullYear()} The Cheat Code. All rights reserved.</p>
      </footer>
    </div>
  )
}