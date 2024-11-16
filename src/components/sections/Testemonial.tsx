'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/images/project-1.jpg",
    quote: "InnoHub transformed our digital presence. Their innovative strategies doubled our online engagement in just three months."
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowFast",
    image: "/images/project-2.jpg",
    quote: "The team at InnoHub is exceptional. Their data-driven approach to marketing has significantly improved our ROI."
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, EcoSolutions",
    image: "/images/project-3.jpg",
    quote: "Working with InnoHub was a game-changer for our startup. They helped us reach our target audience effectively and efficiently."
  }
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const getTestimonialIndex = (shift) => {
    return (currentIndex + shift + testimonials.length) % testimonials.length
  }

  const renderTestimonial = (index, isMain = false) => {
    const testimonial = testimonials[index]
    return (
      <Card className={`bg-gray ${isMain ? 'md:scale-105 z-10' : 'md:scale-90 opacity-70'}`}>
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className={`relative rounded-full overflow-hidden ${isMain ? 'w-32 h-32' : 'w-24 h-24'}`}>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center">
              <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="w-full py-12 bg-white-50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Client Says?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Trust we have gained from our years of experience
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center space-x-4">
            {!isMobile && (
              <div className="hidden md:block w-1/4">
                {renderTestimonial(getTestimonialIndex(-1))}
              </div>
            )}
            <div className="w-full md:w-1/2">
              {renderTestimonial(currentIndex, true)}
            </div>
            {!isMobile && (
              <div className="hidden md:block w-1/4">
                {renderTestimonial(getTestimonialIndex(1))}
              </div>
            )}
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-4 md:ml-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-lg"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-4 md:mr-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-lg"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-sky-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
    
  )
}