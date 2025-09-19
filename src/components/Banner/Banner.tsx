import Container from "../Common/Container";
import SplitText from "../SplitText/SplitText";


export default function Banner() {

    return (
        <Container className="min-h-[calc(100vh-72px)] flex  items-center justify-center">
            <div>
                {/* name intro */}
                <div>
                    <SplitText
                        text="Hi, I'm"
                        className="text-sm md:text-xl lg:text-2xl font-semibold text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <span>&nbsp;&nbsp;&nbsp;</span>
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
            </div>
        </Container>
    )
}
