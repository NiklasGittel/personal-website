"use client";

import { useEffect, useState } from "react";

const SectionNavigator = () => {
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const sectionElements = Array.from(document.querySelectorAll("section")).filter(el => el.id);

        setSections(sectionElements);

        if (sectionElements.length > 0) {
            setActiveId(sectionElements[0].id);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) {
                    setActiveId(visible.target.id);
                }
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        sectionElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-1/2 -translate-y-1/2 left-4 group">
            <ul className="flex flex-col gap-3">
                {sections.map((section) => {
                    const isActive = activeId === section.id;
                    console.log("Active ID:", activeId);
                    console.log("Section ID:", section.id);
                    return (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className={`flex items-center gap-3 py-1 transition-colors ${isActive ? "text-white" : "text-muted-foreground"
                                    }`}
                            >
                                <span className={`block h-px transition-all duration-300 ${isActive
                                    ? "w-4 bg-white"
                                    : "w-2 bg-muted-foreground group-hover:w-2 group-hover:bg-white"
                                    }`} />

                                <span className={`opacity-0 -translate-x-4 transition-all duration-300 hover:text-white group-hover:opacity-100 group-hover:translate-x-0 ${isActive ? "font-bold" : ""}`}>
                                    {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default SectionNavigator