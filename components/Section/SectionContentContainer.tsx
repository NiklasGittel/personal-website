const SectionContentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full px-6 sm:px-8 lg:px-48 py-8 flex flex-col items-center">
            <div className="w-full max-w-3xl flex flex-col items-start gap-4">
                {children}
            </div>
        </div>
    )
}

export default SectionContentContainer