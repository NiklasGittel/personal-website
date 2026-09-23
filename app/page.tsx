
import IntroSection from "@/lib/sections/intro/IntroSection"
import ProjectsSection from "@/lib/sections/projects/ProjectsSection"
import WorkSection from "@/lib/sections/work/WorkSection"
import { Metadata } from "next"
import AboutSection from "@/lib/sections/about/AboutSection"

export const metadata: Metadata = {
  title: 'gittel.dev',
  openGraph: {
    title: 'gittel.dev',
    url: 'https://gittel.dev',
    siteName: 'gittel.dev',
    images: [
      {
        url: 'https://gittel.dev/portrait.jpeg',
        width: 460,
        height: 460,
        alt: 'gittel.dev preview image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gittel.dev',
    images: ['https://gittel.dev/portrait.jpeg'], 
  },
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh w-full pb-20">
      <IntroSection />
      <WorkSection />
      <ProjectsSection />
      {/* <AboutSection /> */}
    </div>
  )
}
