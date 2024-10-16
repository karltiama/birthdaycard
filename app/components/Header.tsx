import { useState, useEffect } from 'react';
import Link from 'next/link';


export function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
      <div className="container mx-auto">
        <nav className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="/countdown" className="text-xl font-semibold hover:underline">Countdown</a>
          <a href="#coupons" className="text-xl font-semibold hover:underline">Coupons</a>
          <a href="#photos" className="text-xl font-semibold hover:underline">Photos</a>
        </nav>
      </div>
    </header>
  );
}
