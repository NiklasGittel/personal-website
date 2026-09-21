import Section from "../../../components/Section/Section"
import WorkExperienceCard from "./WorkExperienceCard"
import workExperiences from "./workExperiences"

const WorkSection = () => {
    return (
        <Section id="work" title="Work" subtitle="My professional journey so far">
            {workExperiences.map((work, index) => (
                <WorkExperienceCard
                    key={index}
                    title={work.title}
                    company={work.company}
                    date={work.date}
                    details={work.details}
                />
            ))}
        </Section >
    )
}

export default WorkSection