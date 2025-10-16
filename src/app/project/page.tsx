import Container from "@/components/Common/Container";
import Title from "@/components/Common/Title";
import projects from "@/components/FeaturedProjects/projects";
import ProjectCard from "@/components/Project/ProjectCard";

export default function ProjectsPage() {
    return (
        <Container className="my-10 lg:my-20">
            {/* Header section */}
            <div className="mb-12">
                <Title
                    title="My Projects"
                    subtitle="A showcase of the web applications and systems I've built with modern technologies."
                />
            </div>

            {/* Projects grid - responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5 max-w-7xl mx-auto">
                {projects.map((project, idx) => (
                    <ProjectCard key={`${project.name}-${idx}`} project={project} />
                ))}
            </div>

            {/* Optional: Empty state if no projects */}
            {projects.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No Projects Yet
                    </h3>
                    <p className="text-gray-600">
                        Check back soon for exciting projects!
                    </p>
                </div>
            )}
        </Container>
    );
}