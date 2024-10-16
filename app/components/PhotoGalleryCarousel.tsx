'use client'

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PhotoItem {
  src: string
  alt: string
  title: string
  description: string
}

const photos: PhotoItem[] = [
  {
    src: "/images/IMG_7415.jpg",
    alt: "Sample phone image 1",
    title: "Pre-Running Selfie",
    description: "Hardcore Runners about to hit the pavement!. I remeber you were so excited to run with me, that you said, we are going so slow! Then proceeded to run so fast ahead of me, I am so proud of you running with me!"
  },
  {
    src: "/images/IMG_2763.jpg",
    alt: "Sample phone image 2",
    title: "Magnus Omandam?!",
    description: "I love how silly this picture is, I was laughing so damn hard. To this day I am convinced that you were on the show!"
  },
  {
    src: "/images/IMG_2644.jpg",
    alt: "Sample phone image 3",
    title: "What does home mean to you?",
    description: "Home isnt a place, it is a feeling that you experience with the people you love. Thank you for making me feel at home whenever I am with you. Thank you for making me feel welcome and loved."
  },
  {
    src: "/images/IMG_3025.jpg",
    alt: "Sample phone image 3",
    title: "Camping Shananigans",
    description: "Camping with you was a one in a lifetime experience. From amazing friends, to the freezing nights sharing one little blanket and our bodies to keep warm. I can't wait for the next time we can all be together again."
  },
  {
    src: "/images/IMG_3147.jpg",
    alt: "Sample phone image 3",
    title: "You Drank my Margarita?!?",
    description: "I was being a silly and drinking too much, even when you told me to slow down, I am sorry for not listening to you. I really like that taco fest tho, it was very fun watching the wrestlers go at it. I couldnt stop laughing at the fact you kept asking me if this was real? HAHAHA "
  },
  {
    src: "/images/IMG_3164.jpg",
    alt: "Sample phone image 3",
    title: "ME + YOU = BOTH BLIND = OUR KIDS SUPER BLIND",
    description: "This picture brings back bouncy memories. I loved jumping all over the place and absolutely had so much fun jousting each other. Even though you beat my butt multiple times, I still had an amazing time"
  },
  {
    src: "/images/IMG_3169.jpg",
    alt: "Sample phone image 3",
    title: "London Sketch Artist",
    description: "Remind me to never draw you again, atleast till I get better. I had so much fun in london, even though london was a small city, we always make the best of it and go on so many adventures."
  },
  {
    src: "/images/IMG_3182.jpg",
    alt: "Sample phone image 3",
    title: "Pure Bliss",
    description: "The funny thing is that before this picture was taken, we had a big fight. I am so glad we were able to make up and make the last of our time in london together worth it. I cant wait for our next chapter together."
  },
  {
    src: "/images/IMG_8796.jpg",
    alt: "Sample phone image 3",
    title: "The many faces of Jomai",
    description: "Honestly the picture that I love the most. Every time I look at the top picture, I laugh my butt off. I love how similar you look with the dogs!"
  },
  {
    src: "/images/museum.jpg",
    alt: "Sample phone image 3",
    title: "What a work of art",
    description: "This picture makes me smile from ear to ear, while some may be looking at the skyline, the main focal poin is that cute face of yours hahaha. I love you so much Jomai"
  }
]

export default function PhotoGalleryCarousel() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0 flex flex-col md:flex-row">
                  <div className="relative flex-grow flex items-center justify-center bg-gray-200 md:w-3/5">
                    <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 p-6 md:w-2/5 bg-white flex items-center justify-center">
                    <ScrollArea className="h-full w-full">
                      <div className="text-center flex flex-col justify-center min-h-full">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">{photo.title}</h2>
                        <p className="text-base text-gray-600 leading-relaxed">{photo.description}</p>
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:-left-12" />
        <CarouselNext className="right-2 md:-right-12" />
      </Carousel>
    </div>
  )
}
