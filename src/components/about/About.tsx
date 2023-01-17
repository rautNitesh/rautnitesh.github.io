import React from 'react'

import styles from "./About.module.scss"

export default function About() {
    return (
        <section className={styles.about_me+" bg-primary with-padding"} id="about-me">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>
                <p>IT enthusiast versed in backend aspect of web development also skilled in frontend technologies with great ability to learn and communicate, organizational and problem solving abilities.

Bachelors in Information Management, Working as a Software Engineer from 2017 while being part of several teams and lead few in different tech stacks delivering results while maintaining consumer Satisfactions.</p>
            </div>
        </section>
    )
}
