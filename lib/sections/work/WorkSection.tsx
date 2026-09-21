import Section from "../../../components/Section/Section"
import WorkExperienceCard from "./WorkExperienceCard"
import workExperiences from "./workExperiences"

const WorkSection = () => {
    return (
        <Section id="work" title="Work" subtitle="My professional journey so far">
            <div className="flex flex-col gap-6">
                {workExperiences.map((work, index) => (
                    <WorkExperienceCard
                        key={index}
                        work={work}
                    />
                ))}
            </div>
        </Section >
    )
}

export default WorkSection