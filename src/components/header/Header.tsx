import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header className={styles.header+" bg-primary"}>
            <div className={styles.content+" container"}>
            <div className={styles.logo}>Nitesh;</div>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#latest-works">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="mailto:contact@niteshraut.com.np">
                            Mail
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
