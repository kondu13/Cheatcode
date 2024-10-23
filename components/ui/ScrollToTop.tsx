import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/Button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-full p-3 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </Button>
      )}
    </>
  )
}