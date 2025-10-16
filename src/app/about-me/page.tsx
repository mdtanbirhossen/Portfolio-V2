
import Container from "@/components/Common/Container";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";


export default function page() {

  return (
    <Container className="my-10 lg:my-20 flex flex-col-reverse md:flex-row">
      {/* intro */}
      <div className=" w-full md:w-1/2 ">
      <h3>Md Tanbir Hossen</h3>
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
