'use client'

import { useState } from 'react';
import { BirthdayCard } from './components/BirthdayCard';
import Confetti from 'react-confetti';
import Countdown from './components/Countdown';
import CouponGrid from './components/CouponGrid';
import PhotoGalleryCarousel from './components/PhotoGalleryCarousel';
export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="min-h-screen bg-[#073b4c] flex flex-col">
      <div className="flex-grow flex items-center justify-center min-h-screen py-16">
        <BirthdayCard onConfettiChange={setShowConfetti} />
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      </div>
      
      <div className="w-full py-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Birthday Playlist</h2>
        <iframe 
          src="https://open.spotify.com/embed/playlist/5fO8sPG9ALAvliXZyJ95vR?utm_source=generator" 
          width="300" 
          height="380"
          allowTransparency={true} 
          allow="encrypted-media"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="w-full py-16">
        <PhotoGalleryCarousel />
      </div>
      <div className="w-full py-16">
        <Countdown />
      </div>
      <div className="w-full py-16">
        <CouponGrid />
      </div>
      
      
    </div>
  );
}

