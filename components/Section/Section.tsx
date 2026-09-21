import { Separator } from "../ui/separator"
import SectionContentContainer from "./SectionContentContainer"

const Section = ({ id, title, subtitle, children }: { id: string, title?: string, subtitle?: string, children?: React.ReactNode }) => {
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
                    <Separator />
                </>
            </SectionContentContainer>
        </section>
    )
}

export default Section