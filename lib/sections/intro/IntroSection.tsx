import { Mail } from "lucide-react"
import Section from "../../../components/Section/Section"
import { Button } from "../../../components/ui/button"

const IntroSection = () => {
    return (
        <Section id="intro">
            <div className="py-40">
                <h1 className="text-2xl font-bold">Hey there, I'm Niklas!</h1>
                <p className="text-muted-foreground">I love to build things and write code. Currently looking for a start-up or project to pour my heart into.</p>
                <div className="flex flex-row gap-2 mt-4">
                    <Button render={<a href="mailto:niklas@gittel.dev" />} nativeButton={false}>
                        <Mail />
                        Get in touch
                    </Button>
                    <Button variant="outline" render={<a href="#projects" />} nativeButton={false}>
                        View projects
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default IntroSection