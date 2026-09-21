import { Mail } from "lucide-react"
import Section from "../../../components/Section/Section"
import { Button } from "../../../components/ui/button"

const IntroSection = () => {
    return (
        <Section id="intro">
            <div className="py-32">
                <div className="flex flex-row gap-8 items-center">
                    <img src="/portrait.jpeg" alt="Profile" className="flex-shrink-0 w-48 h-48 rounded-full" />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold">Hey there, I'm Niklas!</h1>
                        I love to build things and find beauty in simplicity. In design, code and everything else. Currently looking for a start up or project to pour my heart into.
                        <div className="flex flex-row gap-2 mt-4">
                            <Button render={<a href="mailto:niklas@gittel.dev" />} nativeButton={false} variant="outline">
                                <Mail />
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default IntroSection