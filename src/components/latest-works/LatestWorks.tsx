import Image from 'next/image'

import styles from "./LatestWorks.module.scss"
import WDN from "../../../public/images/wdn.webp"
import Suggestic from "../../../public/images/suggestic.webp"

export default function LatestWorks() {
    return (
        <section className={styles.latest_works + " bg-primary gradient with-padding"} id="latest-works">
            <div className="container">
                <div className="section-title">
                    <h2>Discover Latest Works</h2>
                </div>
                <p>
                    Among the many works these are some of the projects I am very proud of.
                </p>

                <div className={styles.works +" grid two-column"}>
                    <a href='https://wdnexus.com' target='_blank' className={styles.work} rel="noopener, noreferrer">
                        <div className={styles.work_image}>
                            <Image src={WDN} alt="frontend development"/>
                        </div>
                        <div className={styles.work_description}>
                            <h3>WDN</h3>
                        </div>
                    </a>
                    <a href="https://suggestic.com" target="_blank" className={styles.work} rel="noopener, noreferrer">
                        <div className={styles.work_image}>
                            <Image src={Suggestic} alt="latest technologies"/>
                        </div>
                        <div className={styles.work_description}>
                            <h3>Suggestic</h3>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
