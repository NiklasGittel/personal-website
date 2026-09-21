
import IntroSection from "@/lib/sections/intro/IntroSection"
import ProjectsSection from "@/lib/sections/projects/ProjectsSection"
import WorkSection from "@/lib/sections/work/WorkSection"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Hello there!',
  description: 'Welcome to my portfolio site!',
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh w-full">
      <IntroSection />
      <WorkSection />
      <ProjectsSection />
    </div>
  )
}
