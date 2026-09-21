import { Separator } from "../ui/separator"
import SectionContentContainer from "./SectionContentContainer"

interface SectionProps {
    id: string
    title?: string
    subtitle?: string
    showSivider?: boolean
    children?: React.ReactNode
}

const Section = ({ id, title, subtitle, children, showSivider = true }: SectionProps) => {
    return (
        <section id={id}>
            <SectionContentContainer>
                <>
                    {title || subtitle ?
                        <div>
                            {title && <h1 className="text-2xl font-bold">{title}</h1>}
                            {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
                        </div>
                        : null}
                    {children}
                    {showSivider && <Separator className="mt-16" />}
                </>
            </SectionContentContainer>
        </section>
    )
}

export default Section