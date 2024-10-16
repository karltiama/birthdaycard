'use client'

import { useState, useCallback } from 'react';

export function BirthdayCard({ onConfettiChange }: { onConfettiChange: (show: boolean) => void }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    onConfettiChange(true);
  }, [onConfettiChange]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    onConfettiChange(false);
  }, [onConfettiChange]);

  return (
    <div 
      className="relative w-[250px] h-[350px] cursor-pointer [transform-style:preserve-3d] [perspective:2500px] transition duration-1000 hover:[transform:perspective(2500px)_rotate(5deg)] hover:shadow-[inset_100px_20px_100px_rgba(0,0,0,0.2),0_10px_100px_rgba(0,0,0,0.5)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative bg-white w-[250px] h-[350px] overflow-hidden [transform-origin:left] shadow-[inset_100px_20px_100px_rgba(0,0,0,0.2),30px_0_50px_rgba(0,0,0,0.4)] transition duration-600 ${isHovered ? '[transform:rotateY(-160deg)]' : ''}`}>
        <h3 className={`font-sans text-center m-[30px] bg-gradient-to-r from-[#f6d365] to-[#fda085] transition duration-100 ${isHovered ? 'invisible' : ''}`}>HAPPY BIRTHDAY MY LOVE!</h3>
        <div className="absolute">
          <div className="absolute w-[85px] h-[95px] rounded-full bg-[rgba(239,71,111,0.7)] left-[-10px] top-[50px] before:content-[''] before:absolute before:w-[1px] before:h-[155px] before:bg-[#ffd166] before:top-[95px] before:left-[43px] after:content-[''] after:absolute after:border-r-[7px] after:border-r-transparent after:border-l-[7px] after:border-l-transparent after:border-b-[10px] after:border-b-[#ef476f] after:top-[94px] after:left-[37px]"></div>
          <div className="absolute w-[85px] h-[95px] rounded-full bg-[rgba(6,214,160,0.7)] left-[50px] top-[20px] before:content-[''] before:absolute before:w-[1px] before:h-[155px] before:bg-[#ffd166] before:top-[95px] before:left-[43px] after:content-[''] after:absolute after:border-r-[7px] after:border-r-transparent after:border-l-[7px] after:border-l-transparent after:border-b-[10px] after:border-b-[#06d6a0] after:top-[94px] after:left-[37px]"></div>
          <div className="absolute w-[85px] h-[95px] rounded-full bg-[rgba(255,209,102,0.7)] left-[110px] top-[50px] before:content-[''] before:absolute before:w-[1px] before:h-[155px] before:bg-[#ffd166] before:top-[95px] before:left-[43px] after:content-[''] after:absolute after:border-r-[7px] after:border-r-transparent after:border-l-[7px] after:border-l-transparent after:border-b-[10px] after:border-b-[#ffd166] after:top-[94px] after:left-[37px]"></div>
          <div className="absolute w-[85px] h-[95px] rounded-full bg-[rgba(17,138,178,0.7)] left-[170px] top-[20px] before:content-[''] before:absolute before:w-[1px] before:h-[155px] before:bg-[#ffd166] before:top-[95px] before:left-[43px] after:content-[''] after:absolute after:border-r-[7px] after:border-r-transparent after:border-l-[7px] after:border-l-transparent after:border-b-[10px] after:border-b-[#118ab2] after:top-[94px] after:left-[37px]"></div>
        </div>
      </div>
      <div className="absolute bg-white w-[250px] h-[350px] -z-10 left-0 top-0 shadow-[inset_100px_20px_100px_rgba(0,0,0,0.2)]">
        <h3 className="font-sans text-[#333] text-center m-[30px] outline-dotted outline-[#333]">HAPPY 29th BIRTHDAY!</h3>
        <p className="font-brush m-[40px] text-[#333]">
          Jomai HAPPY BIRTHDAY! I love you so much and I am so grateful to have you in my life. 
          I am so excited for our future together. Here is a little website I made for you.
        </p>
      </div>
    </div>
  );
}
