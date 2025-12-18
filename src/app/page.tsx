import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience/Experience";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import GithubContribution from "@/components/GithubContribution/GithubContribution";
import Skill from "@/components/Skill/Skill";

export default async function Home() {
  return (
    <>
      <Banner />
      <Experience />
      <Skill />
      <GithubContribution />
      <FeaturedProjects />
    </>
  );
}
