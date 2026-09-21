import { WorkExperienceDetail } from "./workExperienceDetail"

export interface WorkExperience {
    title: string
    company: string
    date: string
    details: WorkExperienceDetail[]
}