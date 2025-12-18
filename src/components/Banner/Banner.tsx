import { FileSymlink, Github } from "lucide-react";
import Container from "../Common/Container";
import SplitText from "../SplitText/SplitText";
import TextSlider from "../TextSlider/TextSlider";
import { Button } from "../ui/button";
import Link from "next/link";


export default function Banner() {

    return (
        <Container className="min-h-[calc(100vh-72px)] flex flex-col  items-center justify-center">

            {/* name intro */}
            <div>
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
            <div className="">
                <TextSlider
                    sentences={[
                        "Full Stack Developer crafting responsive and user-friendly web experiences.",
                        "Software Engineer building efficient and scalable web applications.",
                        "MERN Stack Developer creating dynamic and interactive web platforms.",
                        "Backend Developer designing robust server-side architectures and APIs."
                    ]
                    }
                    duration={1} // cursor animation duration
                    delayBetweenSentences={5000} // wait before next sentence
                    className="text-sm md:text-lg lg:text-xl text-center text-secondary-dark dark:text-secondary-light-text"
                    cursorClassName="bg-secondary-dark"
                    parentClassName="w-fit "
                />

            </div>
            <div className="flex  gap-2 mt-2">
                <Link href={'https://github.com/mdtanbirhossen'}><Button className=" bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light">Github <Github /></Button></Link>
                <Link href={'https://drive.google.com/file/d/1AaamO8kSj_771TDAnOSFeLnO4iVkPgqG/view?usp=sharing'}><Button className=" bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light">Resume <FileSymlink /></Button></Link>


            </div>

        </Container>
    )
}
