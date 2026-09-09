import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Your friendly neighborhood dev',
  description: 'Welcome to my portfolio site!',
}

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
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
    </div>
  )
}
