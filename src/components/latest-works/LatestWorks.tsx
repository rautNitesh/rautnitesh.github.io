import Image, { StaticImageData } from 'next/image'
import styles from "./LatestWorks.module.scss"
import Suqo from "../../../public/images/suqo-banner.png"
import Suggestic from "../../../public/images/suggestic.webp"
import Siphox from "../../../public/images/siphox-banner.webp"
import Avec from "../../../public/images/aveainsights-banner.webp"
import Cor from "../../../public/images/cor-banner.webp"

const works: { title: string; href: string; image: StaticImageData; tag: string }[] = [
    { title: "Suqo",          href: "https://suqo.ai",                        image: Suqo,      tag: "Web Development" },
    { title: "Suggestic",     href: "https://suggestic.com",                  image: Suggestic, tag: "Web Development" },
    { title: "SiPhoX Health", href: "https://siphoxhealth.com",               image: Siphox,    tag: "Web Development" },
    { title: "Aveva Insights",href: "https://insights.aveva-life.com",        image: Avec,      tag: "Web Development" },
    { title: "COR",           href: "https://corhealth.com",                  image: Cor,       tag: "Web App" },
]

export default function LatestWorks() {
    return (
        <section className={styles.latest_works + " with-padding"} id="latest-works">
            <div className="container">
                <div className="section-title reveal reveal--fade">
                    <h2>Latest <span>Works</span></h2>
                </div>
                <p className={`${styles.subtitle} reveal reveal--fade`} data-delay="1">
                    Among the many works, these are some of the projects I am very proud of.
                </p>

                <div className={styles.works}>
                    {works.map((work, i) => (
                        <a
                            key={work.title}
                            href={work.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.work} ${i >= 3 ? styles.work_wide : ''} reveal`}
                            data-delay={String((i % 3) + 1)}
                        >
                            <div className={styles.work_image}>
                                <Image src={work.image} alt={work.title} />
                                <div className={styles.overlay}>
                                    <span className={styles.visit_label}>Visit Site →</span>
                                </div>
                            </div>
                            <div className={styles.work_info}>
                                <h3>{work.title}</h3>
                                <span className={styles.tag}>{work.tag}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
