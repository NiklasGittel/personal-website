
import IntroSection from "@/components/IntroSection"
import ProjectsSection from "@/components/ProjectsSection"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Your friendly neighborhood dev',
  description: 'Welcome to my portfolio site!',
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh w-full">
      <IntroSection />
      <Separator />
      <ProjectsSection></ProjectsSection>
    </div>
  )
}
