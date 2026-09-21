import Section from "../../../components/Section/Section"

const AboutSection = () => {
    return (
        <Section id="about" title="About" subtitle="A little more about me" showSivider={false}>
            <div className="flex flex-row gap-8 items-center">
                <img src="/portrait.jpeg" alt="Profile" className="flex-shrink-0 w-32 h-32 rounded-full" />
                <div className="flex">
                    I find beauty in simplicity. In design, code and everything else. I cherish meaningful connections and hope to somehow make a positive dent in this weird little world of ours. Also very passionate about all sorts of sports, reading and playing the piano.
                </div>
            </div>
        </Section>
    )
}

export default AboutSection