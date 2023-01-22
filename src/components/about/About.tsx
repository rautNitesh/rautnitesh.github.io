import Image from 'next/image'

import styles from "./About.module.scss"
import SoftwareDev from "../../../public/images/software-development.svg"
import LatestTech from "../../../public/images/latest-tech.svg"
import Result from "../../../public/images/result.svg"

export default function About() {
    return (
        <section className={styles.about_me + " bg-primary with-padding"} id="about-me">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>
                <p>
                    IT enthusiast versed in frontend aspect of web development also skilled with great ability to learn and communicate, organizational and problem solving abilities.
                    Bachelors in Computer Science And Information Technology (Bsc. CSIT), Working as a Software Engineer from 2020 while being part of several teams and lead few in different tech stacks delivering results while maintaining consumer Satisfactions.
                </p>

                <div className={styles.services}>
                    <div className={styles.service}>
                        <div className={styles.service_image}>
                            <Image src={SoftwareDev} alt="frontend development"/>
                        </div>
                        <div className={styles.service_description}>
                            <h3>Frontend Development</h3>
                            <p>Web and Mobile based Software Development To Build Enterprise Solutions. Modern JAM Stack Development</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.service_image}>
                            <Image src={LatestTech} alt="latest technologies"/>
                        </div>
                        <div className={styles.service_description}>
                            <h3>Latest Technology</h3>
                            <p>Constantly Upgrading to cope with the industries latest conventions and technology</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.service_image}>
                            <Image src={Result} alt="100% end result"/>
                        </div>
                        <div className={styles.service_description}>
                            <h3>100% End Result</h3>
                            <p>Goal is to push limits to meet your satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
