import Image from 'next/image'
import React from 'react'

import styles from "./Banner.module.scss"
import Nitesh from "../../../public/images/nitesh.png"
import ReactLogo from "../../../public/images/react.png"
import Redux from "../../../public/images/redux.png"
import Typescript from "../../../public/images/typescript.png"
import Next from "../../../public/images/next.png"

export default function Banner() {
    return (
        <section className={styles.banner+" bg-primary gradient"}>
            <div className="container">
                <div className={styles.banner_content}>
                    <div className={styles.title_description}>
                        <div className={styles.text_over}>
                            <span>hi/ namaste !</span>
                        </div>
                        <h1>
                            I&apos;m <span>
                                Nitesh Raut
                            </span>
                        </h1>
                        <p>Frontend Developer</p>
                        <p className={styles.description}>

                        </p>
                    </div>
                    <div className={styles.hero_image}>
                        <div className={styles.first_orbit}>
                        <Image className={styles.react_logo} src={ReactLogo} alt="" />
                        <Image className={styles.redux_logo} src={Redux} alt="" />
                        <Image className={styles.typescript} src={Typescript} alt="" />
                        <Image className={styles.next} src={Next} alt="" />
                        </div>
                        <Image src={Nitesh} alt="Nitesh Raut frontend developer from Chitwan,Nepal" />
                    </div>
                </div>
            </div>
        </section>
    )
}
