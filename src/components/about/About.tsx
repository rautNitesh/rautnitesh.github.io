import Image from 'next/image'
import styles from "./About.module.scss"
import SoftwareDev from "../../../public/images/software-development.svg"
import LatestTech from "../../../public/images/latest-tech.svg"
import Result from "../../../public/images/result.svg"

export default function About() {
    return (
        <section className={styles.about_me + " with-padding"} id="about-me">
            <div className="container">
                <div className="section-title reveal reveal--fade">
                    <h2>About <span>Me</span></h2>
                </div>
                <p className={`${styles.bio} reveal reveal--fade`} data-delay="1">
                    IT enthusiast versed in the frontend aspect of web development — skilled with a great ability to learn,
                    communicate, and solve problems. Bachelors in Computer Science &amp; Information Technology (Bsc. CSIT).
                    Working as a Software Engineer since 2020, part of several teams and lead a few, delivering results
                    across different tech stacks while maintaining consumer satisfaction.
                </p>

                <div className={styles.services}>
                    <div className={`${styles.service} reveal`} data-delay="1">
                        <div className={styles.service_icon}>
                            <Image src={SoftwareDev} alt="frontend development" />
                        </div>
                        <div className={styles.service_content}>
                            <h3>Frontend Development</h3>
                            <p>Web and mobile-based software development to build enterprise solutions. Modern JAM Stack development.</p>
                        </div>
                    </div>
                    <div className={`${styles.service} reveal`} data-delay="2">
                        <div className={styles.service_icon}>
                            <Image src={LatestTech} alt="latest technologies" />
                        </div>
                        <div className={styles.service_content}>
                            <h3>Latest Technology</h3>
                            <p>Constantly upgrading to keep pace with the industry&apos;s latest conventions and technology.</p>
                        </div>
                    </div>
                    <div className={`${styles.service} reveal`} data-delay="3">
                        <div className={styles.service_icon}>
                            <Image src={Result} alt="100% end result" />
                        </div>
                        <div className={styles.service_content}>
                            <h3>100% End Result</h3>
                            <p>The goal is to push limits and consistently meet your expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
