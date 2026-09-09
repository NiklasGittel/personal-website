import { Mail } from "lucide-react"
import { Button } from "./ui/button"

const IntroSection = () => {
    return (
        <div className="section-container">
            <div className="max-w-md min-w-0 flex flex-col gap-4 ">
                <h1 className="text-2xl font-bold">Hey there!</h1>
                <p className="text-muted-foreground">I love to build stuff and write code. Currently looking for a start-up or project to pour my heart into.</p>
                <div className="flex flex-row gap-2 mt-2">
                    <Button render={<a href="mailto:niklas@gittel.dev" />} nativeButton={false}>
                        <Mail />
                        Get in touch
                    </Button>
                    <Button variant="outline">
                        View projects
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default IntroSection