import { Mail } from "lucide-react"
import { Button } from "./ui/button"
import SectionContainer from "./SectionContainer"

const IntroSection = () => {
    return (
        <SectionContainer id="intro">
                <h1 className="text-2xl font-bold">Hey there!</h1>
                <p className="text-muted-foreground">I love to build stuff and write code. Currently looking for a start-up or project to pour my heart into.</p>
                <div className="flex flex-row gap-2 mt-2">
                    <Button render={<a href="mailto:niklas@gittel.dev" />} nativeButton={false}>
                        <Mail />
                        Get in touch
                    </Button>
                    <Button variant="outline" render={<a href="#projects" />} nativeButton={false}>
                        View projects
                    </Button>
                </div>
        </SectionContainer>
    )
}

export default IntroSection