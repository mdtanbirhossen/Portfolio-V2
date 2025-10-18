
import SplitText from '../SplitText/SplitText'
import { CometCard } from '../ui/comet-card'

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

        <CometCard>
          <button
            type="button"
            className="my-4 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-secondary-light dark:bg-secondary-dark p-2 saturate-0 md:mb-10 md:p-4"
            aria-label="View invite F7RA"
            style={{
              transformStyle: "preserve-3d",
              transform: "none",
              opacity: 1,
            }}
          >
            <div className="mx-2 flex-1">
              <div className="relative mt-2 aspect-[3/4] w-full">
                <img
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-[16px] bg-[#ffffff] dark:bg-[#000000] object-cover contrast-75"
                  alt="Invite background"
                  src="/assets/tanbir2.jpg"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                    opacity: 1,
                  }}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 ">
              <div className="text-xs">Md Tanbir Hossen</div>
              <div className="text-xs text-secondary-dark dark:text-secondary-light-text opacity-50">Software Engineer</div>
            </div>
          </button>
        </CometCard>

      </div>
    </section>
  )
}
