import styles from "./Header.module.scss"

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.content + " container"}>
                    <div className={styles.logo}>Nitesh<span>;</span></div>
                    <nav className={styles.desktop_nav}>
                        <ul>
                            <li><a href="#about-me">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#latest-works">Portfolio</a></li>
                            <li>
                                <a href="mailto:contact@niteshraut.com.np" className={styles.mail_link}>
                                    Mail
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile: floating bottom pill — no hamburger */}
            <nav className={styles.mobile_nav} aria-label="Mobile navigation">
                <div className={styles.pill}>
                    <a href="#about-me">About</a>
                    <span className={styles.sep} aria-hidden="true" />
                    <a href="#skills">Skills</a>
                    <span className={styles.sep} aria-hidden="true" />
                    <a href="#latest-works">Work</a>
                    <span className={styles.sep} aria-hidden="true" />
                    <a href="mailto:contact@niteshraut.com.np" className={styles.mail_pill}>Mail</a>
                </div>
            </nav>
        </>
    )
}
