import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { playfair } from '../font'

const HeroSection = () => {
  return (
    <section id='home' className="section mt-20">
        <div className="home_shadow w-full h-[375px] absolute bottom-1 z-1 bg-[linear-gradient(180deg,hsla(240,100%,2%,0)_10%,hsl(240,100%,2%)_30%)] lg:bg-[linear-gradient(180deg,hsla(240,100%,2%,0)_60%,hsl(240,100%,2%)_80%)]"></div>
        <div className="Content  mx-auto section relative flex flex-col gap-10 justify-between items-center lg:flex-row md:max-w-11/12 lg:justify-center">
          <div className={`${playfair.className} text-3xl font-bold  left-1 lg:text-5xl lg:absolute lg:top-10`}>
            <h1 >Hello, </h1>
            <h1>Im Zakaria Tebiche</h1>
          </div>
          <div className="relative">
            <div className="bg-gray-200 w-70 h-70 rounded-full top-1/2 left-1/2 blur-3xl absolute -z-1 -translate-x-1/2 -translate-y-1/2"></div>
            <Image
              src={'/picture.png'}
              height={700}
              width={700}
              alt="zakaria tebiche"
              className="w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] object-cover relative"
            />
          </div>
          <div className={`${playfair.className} text-2xl font-bold z-2 justify-center lg:text-3xl lg:absolute lg:right-1 lg:bottom-10 `}>
            <div>
              State engineer in management
            </div>
            <div>
              & Reception manager
            </div>
          </div>
          <div className={`${playfair.className} text-lg z-2 justify-center lg:text-xl lg:absolute lg:left-1 lg:bottom-10 flex items-center`}>
              <ArrowDown size={20} absoluteStrokeWidth/>
              <h2>Scroll down</h2>
          </div>
        </div>
      </section>
  )
}

export default HeroSection