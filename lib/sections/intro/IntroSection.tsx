import { Mail } from "lucide-react"
import Section from "../../../components/Section/Section"
import { Button } from "../../../components/ui/button"
import { Separator } from "../../../components/ui/separator"

const IntroSection = () => {
    return (
        <Section id="intro">
            <div className="py-48">
                <h1 className="text-2xl font-bold">Hello there, I'm Niklas!</h1>
                <p className="text-muted-foreground">I love to build cool stuff and write code. Currently looking for a start-up or project to pour my heart into.</p>
                <div className="flex flex-row gap-2 mt-2">
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