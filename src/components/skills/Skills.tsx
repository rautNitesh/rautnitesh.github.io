import styles from "./Skills.module.scss"

const skillGroups = [
    {
        label: "Core",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES2023)", "HTML5", "CSS3"]
    },
    {
        label: "State & Data",
        skills: ["Redux", "Redux Toolkit", "React Query", "Context API", "REST APIs"]
    },
    {
        label: "Styling",
        skills: ["SCSS / Sass", "CSS Modules", "Tailwind CSS", "Styled Components"]
    },
    {
        label: "Tools",
        skills: ["Git & GitHub", "Webpack", "Vite", "Figma", "Vercel", "Storybook"]
    },
]

export default function Skills() {
    return (
        <section className={styles.skills + " with-padding"} id="skills">
            <div className="container">
                <div className="section-title reveal reveal--fade">
                    <h2>Tech <span>Stack</span></h2>
                </div>
                <p className={`${styles.subtitle} reveal reveal--fade`} data-delay="1">
                    Tools and technologies I reach for every day.
                </p>

                <div className={styles.groups}>
                    {skillGroups.map((group, i) => (
                        <div
                            key={group.label}
                            className={`${styles.group} reveal`}
                            data-delay={String((i % 4) + 1)}
                        >
                            <span className={styles.group_label}>{group.label}</span>
                            <div className={styles.chips}>
                                {group.skills.map((skill) => (
                                    <span key={skill} className={styles.chip}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
