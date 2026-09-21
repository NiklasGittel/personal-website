const SectionContentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:px-48 py-8 flex flex-col items-center">
            <div className="max-w-3xl min-w-3xl flex flex-col items-start gap-4">
                {children}
            </div>
        </div>
    )
}

export default SectionContentContainer