
import Container from "@/components/Common/Container";
import SplitText from "@/components/SplitText/SplitText";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";


export default function page() {

  return (
    <Container className="my-10 lg:my-20 flex flex-col-reverse md:flex-row">
      {/* intro */}
      <div className="w-full md:w-1/2 flex items-center justify-center flex-col gap-2">
        {/* name intro */}
        <div className="">
          <SplitText
            text="Hi, I'm"
            className="text-sm md:text-xl lg:text-2xl font-semibold text-center"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <span>&nbsp;&nbsp;</span>
          <SplitText
            text="Md Tanbir Hossen"
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center"
            delay={100}
            startDelay={0.7}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>

        {/* description */}
        <div className="">
          <SplitText
            text="I'm a Software Engineer crafting modern, scalable web applications with clean code and creative design. I love building full-stack solutions using Next.js, NestJS, and TypeScript."
            className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300"
            delay={50}
            startDelay={1}
            duration={0.5}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

        </div>
      </div>


      {/* image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <PixelatedCanvas
          height={400}
          width={400}
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
      {/* <UnderConstruction /> */}
    </Container>
  )
}
