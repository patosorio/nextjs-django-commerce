'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50">
        <nav className="bg-primary md:bg-primary bg-slate-800 h-16">
          <div className="container relative">
            <div className="flex items-center justify-between">
              <Link href="/" className="absolute md:top-0 top-1/2 md:-translate-y-0 -translate-y-1/2">
                <Image 
                  src="/images/logos/logo-black.png" 
                  alt="Naturwest Logo" 
                  width={125} 
                  height={125}
                  className="w-auto h-[50px] md:h-[125px] transition-all"
                  priority 
                />
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex navigation-items items-center gap-4 ml-auto py-5">
                <Link href="/" className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors">INICIO</Link>
                <Link href="/" className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors">TIENDA</Link>
                <Link href="/" className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors">OFERTAS</Link>
                <Link href="/" className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors">VENTAS AL POR MAYOR</Link>
                <Link href="/" className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors">BLOG</Link>
                <Link href="/" className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors">CONTACTO</Link>

                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/images/icons/cart.svg" 
                    alt="Naturwest cart icon" 
                    width={20} 
                    height={20}
                    className="invert brightness-0" 
                  />
                </Link>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/images/icons/user.svg" 
                    alt="Naturwest user icon" 
                    width={20} 
                    height={20}
                    className="invert brightness-0" 
                  />
                </Link>
              </div>

              {/* Mobile Navigation Toggle */}
              <div className="flex md:hidden items-center gap-4 ml-auto py-5">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/images/icons/cart.svg" 
                    alt="Naturwest cart icon" 
                    width={20} 
                    height={20}
                    className="[filter:invert(76%)_sepia(11%)_saturate(1095%)_hue-rotate(43deg)_brightness(89%)_contrast(85%)]" 
                  />
                </Link>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/images/icons/user.svg" 
                    alt="Naturwest user icon" 
                    width={20} 
                    height={20}
                    className="[filter:invert(76%)_sepia(11%)_saturate(1095%)_hue-rotate(43deg)_brightness(89%)_contrast(85%)]" 
                  />
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image 
                    src="/images/icons/bars.svg" 
                    alt="Menu" 
                    width={20} 
                    height={20}
                    className="[filter:invert(76%)_sepia(11%)_saturate(1095%)_hue-rotate(43deg)_brightness(89%)_contrast(85%)]" 
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="container py-4">
              <div className="flex flex-col gap-4">
                <Link 
                  href="/" 
                  className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  INICIO
                </Link>
                <Link 
                  href="/" 
                  className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  TIENDA
                </Link>
                <Link 
                  href="/" 
                  className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  OFERTAS
                </Link>
                <Link 
                  href="/" 
                  className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VENTAS AL POR MAYOR
                </Link>
                <Link 
                  href="/" 
                  className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOG
                </Link>
                <Link 
                  href="/" 
                  className="text-white font-['Freeman'] text-base hover:text-white/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACTO
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>
    </>
  );
}