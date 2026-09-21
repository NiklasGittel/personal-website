import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "../../../components/ui/card"

import { WorkExperience } from "./workExperience"

const WorkExperienceCard = (exp: WorkExperience) => {
    const addHyphen = exp.details.length > 1
    return (
        <Card className="min-w-full">
            <CardHeader>
                <CardTitle className="flex flex-row justify-between w-full">
                    {exp.title}
                    <span className="text-muted-foreground text-sm">{exp.date}</span>
                </CardTitle>
                <CardDescription>
                    {exp.company}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-inside space-y-2">
                    {exp.details.map((detail, index) => (
                        detail.subDetails && detail.subDetails.length > 0
                            ? (
                                <li key={index} className="flex flex-col gap-2">
                                    <div className={`flex gap-2 ${addHyphen ? "before:content-['-']" : ""}`}>{detail.detail}</div>
                                    <ul className="list-inside space-y-2">
                                        {detail.subDetails!.map((subDetail, subIndex) => (
                                            <li key={subIndex} className="flex gap-2 pl-4 before:content-['—']">{subDetail}</li>
                                        ))}
                                    </ul>
                                </li>
                            )
                            :
                            <li key={index} className={`flex gap-2 ${addHyphen ? "before:content-['-']" : ""}`}>{detail.detail}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export default WorkExperienceCard