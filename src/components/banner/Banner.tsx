import Image from 'next/image'
import styles from "./Banner.module.scss"
import Nitesh from "../../assets/images/nitesh-image.png"
import ReactLogo from "../../assets/images/react.png"
import Redux from "../../assets/images/redux.png"
import Typescript from "../../assets/images/typescript.png"
import Next from "../../assets/images/next.png"

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.text_side}>
                <div className={styles.text_inner}>
                    <div className={styles.greeting}>
                        <span className={styles.dot}></span>
                        <span>hi / namaste !</span>
                    </div>
                    <h1>
                        I&apos;m{' '}
                        <span className={styles.name}>Nitesh Raut</span>
                    </h1>
                    <p className={styles.role}>Senior Frontend Developer</p>
                    <div className={styles.code_line}>
                        <span className={styles.hash}>#</span>
                        <span className={styles.code_dim}>react</span>
                        <span className={styles.code_accent}>next.js</span>
                        <span className={styles.code_dim}>typescript</span>
                    </div>
                    <p className={styles.bio}>
                        Building pixel-perfect, performant web experiences.
                        Based in Chitwan, Nepal.
                    </p>
                    <div className={styles.cta_group}>
                        <a href="#latest-works" className={styles.cta_primary}>View Work</a>
                        <a href="/images/Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.cta_secondary}>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.image_side}>
                <Image
                    src={Nitesh}
                    alt="Nitesh Raut — Senior Frontend Developer"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    priority
                />

                <div className={styles.tech_float}>
                    <div className={styles.tech_chip}>
                        <Image src={ReactLogo} alt="React" width={20} height={20} />
                        <span>React.js</span>
                    </div>
                    <div className={styles.tech_chip}>
                        <Image src={Next} alt="Next.js" width={20} height={20} />
                        <span>Next.js</span>
                    </div>
                    <div className={styles.tech_chip}>
                        <Image src={Typescript} alt="TypeScript" width={20} height={20} />
                        <span>TypeScript</span>
                    </div>
                    <div className={styles.tech_chip}>
                        <Image src={Redux} alt="Redux" width={20} height={20} />
                        <span>Redux</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
