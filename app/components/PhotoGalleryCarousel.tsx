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
import { photos, PhotoItem } from "@/app/data/photoData"

export default function PhotoGalleryCarousel() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Our Memories Together</h2>
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
      <h2 className="text-3xl font-bold text-center text-white mb-8">And many more to come...</h2>
    </div>
  )
}
