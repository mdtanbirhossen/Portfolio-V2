import Container from "@/components/Common/Container";
import projects from "@/components/FeaturedProjects/projects";
import ProjectCard from "@/components/Project/ProjectCard";
import UnderConstruction from "@/components/UnderConstruction/UnderConstruction";

export default function page() {
    return (
        <>
            <Container className=" grid  grid-cols-2">
                {projects.map((project,idx) => <ProjectCard key={idx} project={project} />)}
            </Container>
        </>
    )
}
