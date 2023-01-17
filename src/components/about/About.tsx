import React from 'react'

import styles from "./About.module.scss"

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
            </div>
        </section>
    )
}
