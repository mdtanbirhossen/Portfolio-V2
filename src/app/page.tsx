import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience/Experience";
import GithubContribution from "@/components/GithubContribution/GithubContribution";
// import Navbar from "@/components/Navbar/Navbar";
import Skill from "@/components/Skill/Skill";

export default async function Home() {
  return (
    <>

      <Banner />
      <Experience />
      <Skill />
      <GithubContribution />

    </>
  );
}
