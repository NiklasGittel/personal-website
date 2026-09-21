import Section from "../../../components/Section/Section"
import ProjectCard from "./ProjectCard"
import projects from "./projects"

const ProjectsSection = () => {
    return (
        <Section id="projects" title="Projects" subtitle="Some projects I've worked on">
            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Section>
    )
}

export default ProjectsSection