
import Container from "@/components/Common/Container";

import Introduction from "@/components/AboutMe/Introduction";
import Education from "@/components/AboutMe/Education";


export default function page() {

  return (
    <Container className="my-10 lg:my-20 ">
      {/* introduction section */}
      <Introduction />

      {/* education section */}
      <Education/>

    </Container>
  )
}
