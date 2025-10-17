import React from 'react'
import { PixelatedCanvas } from '../ui/pixelated-canvas'
import SplitText from '../SplitText/SplitText'

export default function Introduction() {
  return (
          <section className="flex flex-col-reverse md:flex-row gap-5">
        {/* intro */}
        <div className="w-full md:w-1/2 flex   justify-center flex-col gap-2">
          {/* name intro */}
          <div className="">
            <SplitText
              text="Hi, I'm"
              className="text-xs md:text-sm lg:text-xl font-semibold "
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
            <span>&nbsp;&nbsp;</span>
            <SplitText
              text="Md Tanbir Hossen"
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold "
              delay={100}
              startDelay={0.7}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </div>

          {/* description */}
          <div className="">
            <SplitText
              text="I'm a Software Engineer crafting modern, scalable web applications with clean code and creative design. I love building full-stack solutions using Next.js, NestJS, and TypeScript."
              className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300"
              delay={50}
              startDelay={1}
              duration={0.5}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign="left"
              rootMargin="-100px"
            />
          </div>
        </div>


        {/* image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <PixelatedCanvas
            height={350}
            width={350}
            src="/assets/tanbir2.jpg"
            cellSize={2}
            dotScale={0.1}
            shape="square"
            // backgroundColor={isDark ? '#000000' : '#000000'}
            tintColor={'#000000'}
            dropoutStrength={0.2}
            interactive
            distortionStrength={3}
            distortionRadius={40}
            distortionMode="repel"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintStrength={0.2}
            className="rounded-full border-4 border-secondary-light dark:border-secondary-dark shadow-lg"
          />
        </div>
      </section>
  )
}
