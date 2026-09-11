const SectionContainer = ({ id, children }: { id: string; children: React.ReactNode }) => {
    return (
        <div className="lg:px-48 py-16 flex flex-col items-center" id={id}>
            <div className="max-w-3xl min-w-3xl flex flex-col items-start gap-4">
                {children}
            </div>
        </div>
    )
}

export default SectionContainer