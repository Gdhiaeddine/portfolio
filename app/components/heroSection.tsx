'use client'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { playfair } from '../font'
import { animate, splitText, stagger } from 'animejs';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const professionRef = useRef<HTMLDivElement>(null)
  const professionRef2 = useRef<HTMLDivElement>(null)


  useEffect(() => {
  if (!professionRef.current || !professionRef2.current) return

  const { chars: chars1 } = splitText(professionRef.current, {
    chars: { wrap: 'clip' },
  })

  const { chars: chars2 } = splitText(professionRef2.current, {
    chars: { wrap: 'clip' },
  })

  // Animate each separately
  animate(chars1, {
    y: [
      { to: ['100%', '0%'] },
      { to: '-100%', delay: 750, ease: 'in(3)' },
    ],
    duration: 2000,
    ease: 'out(3)',
    delay: stagger(50),
    loop: true,
  })

  animate(chars2, {
    y: [
      { to: ['100%', '0%'] },
      { to: '-100%', delay: 750, ease: 'in(3)' },
    ],
    duration: 2000,
    ease: 'out(3)',
    delay: stagger(50),
    loop: true,
  })
}, [])




  return (
    <section id='home' className="section mt-20 text-white">
      <div className="home_shadow w-full h-[375px] absolute bottom-1 z-1"></div>
      <div className="mx-auto section relative flex flex-col gap-10 justify-between items-center lg:flex-row md:max-w-11/12 lg:justify-center">
        <div className={`${playfair.className} text-3xl font-bold  left-1 lg:text-5xl lg:absolute lg:top-10 `}>
          <h1 >Hello, </h1>
          <h1>Im Zakaria Tebiche</h1>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-70 h-70 rounded-full top-1/2 left-1/2 blur-3xl absolute -translate-x-1/2 -translate-y-1/2"></div>
          <Image
            src={'/picture.png'}
            height={700}
            width={700}
            alt="zakaria tebiche"
            className="w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] object-cover relative"
          />
        </div>
        <div className={`${playfair.className} text-2xl font-bold z-2 justify-center lg:text-3xl lg:absolute lg:right-1 lg:bottom-10 `}>
          <div ref={professionRef} className='profession1'>
            State engineer in management
          </div>
          <div ref={professionRef2} className='profession2' >
            & Reception manager
          </div>
        </div>
        <div className={`${playfair.className} text-lg z-2 justify-center lg:text-xl lg:absolute lg:left-1 lg:bottom-10 flex items-center`}>
          <ArrowDown size={20} absoluteStrokeWidth />
          <h2>Scroll down</h2>
        </div>
      </div>
    </section>
  )
}

export default HeroSection