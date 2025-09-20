import Banner from "@/components/Banner/Banner";
import GithubContribution from "@/components/GithubContribution/GithubContribution";
import Navbar from "@/components/Navbar/Navbar";
import Skill from "@/components/Skill/Skill";

export default async function Home() {
  return (
    <>
      <div >
        <div className=""><Banner /></div>
        <div><Skill /></div>
        <GithubContribution />
      </div>
    </>
  );
}
