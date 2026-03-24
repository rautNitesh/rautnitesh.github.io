import styles from "./Banner.module.scss"

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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/nitesh-image.png"
                    alt="Nitesh Raut — Senior Frontend Developer"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />

                <div className={styles.tech_float}>
                    <div className={styles.tech_chip}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/react.png" alt="React" width={20} height={20} />
                        <span>React.js</span>
                    </div>
                    <div className={styles.tech_chip}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/next.png" alt="Next.js" width={20} height={20} />
                        <span>Next.js</span>
                    </div>
                    <div className={styles.tech_chip}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/typescript.png" alt="TypeScript" width={20} height={20} />
                        <span>TypeScript</span>
                    </div>
                    <div className={styles.tech_chip}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/redux.png" alt="Redux" width={20} height={20} />
                        <span>Redux</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
