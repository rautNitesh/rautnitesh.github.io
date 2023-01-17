import React from 'react'

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
                        <a>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="mailto:rautesh6@gmail.com">
                            Mail
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
