import { WorkExperience } from "./workExperience";

const workExperiences: WorkExperience[] = [
    {
        title: "Lead Engineer Web Analytics",
        company: "Festo SE & Co. KG",
        date: "Mar 2026 - Present",
        details: [
            { detail: "Responsible for maintaining and improving the internally developed analytics framework." },
            { detail: "Built a custom tag management solution for managing third party analytics tags." },
        ]
    },
    {
        title: "Business Critical Incident (BCI) Manager",
        company: "Festo SE & Co. KG",
        date: "Jan 2026 - Present",
        details: [{ detail: "First person of contact in case of BCIs." }, { detail: "Responsible for coordinating team efforts and communication with stake holders while solving BCIs." }]
    },
    {
        title: "Website Quality & Governance Lead",
        company: "Festo SE & Co. KG",
        date: "Jan 2025 - Present",
        details: [
            { detail: "Conducted website audits across SEO, Security, Accessibility, and Compliance for all Festo websites." }, { detail: "Automated processes and built a fleet of automated scanners." }, { detail: "Managed and automated the findings and follow-up actions." }]
    },
    {
        title: "Software Engineer",
        company: "Festo SE & Co. KG",
        date: "Oct 2022 - Present",
        details: [
            {
                detail: "Built and maintained various tools and systems:",
                subDetails:
                    [
                        "Custom redirect solution with a maximum downtime of 4h that served 15.000+ of daily redirects",
                        "A message queue to connecting the PIM and MAM system",
                        "Event-driven cache invalidator to manage cache invalidation for all media assets used on the Festo website.",
                        "Distributor locator providing a map based interface powered via a custom search index",
                        "Multiple CRUD applications"
                    ]
            },
            { detail: "Scaled operations internationally by hiring and onboarding a team of four, bringing the new location to full productivity within two months." },
            { detail: "Co-responsible for Festo’s CDN (Akamai)" },
            { detail: "Set up  CI/CD pipelines and automated testing for multiple applications" }
        ]
    },
    {
        title: "Agile Master",
        company: "Festo SE & Co. KG",
        date: "Jan 2023 - Dec 2025",
        details: [{ detail: "Coached and coordinated the team in the context of the SAFe framework." }, { detail: "Assumed Release Train Engineer responsibilities." }]
    }
];

export default workExperiences;