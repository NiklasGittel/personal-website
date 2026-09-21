import Section from "../../../components/Section/Section"
import ProjectCard from "./ProjectCard"
import projects from "./projects"

const ProjectsSection = () => {
    return (
        <Section id="projects" title="Projects" subtitle="Some projects I've worked on">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </Section>
    )
}

export default ProjectsSection