import styles from "./Stats.module.scss"

const stats = [
    { value: "5+",  label: "Years of Experience" },
    { value: "10+", label: "Projects Delivered" },
    { value: "2",   label: "Live Products" },
    { value: "∞",   label: "Curiosity Level" },
]

export default function Stats() {
    return (
        <section className={styles.stats}>
            <div className="container">
                <div className={styles.stats_grid}>
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`${styles.stat_item} reveal`}
                            data-delay={String(i + 1)}
                        >
                            <span className={styles.stat_value}>{stat.value}</span>
                            <span className={styles.stat_label}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
