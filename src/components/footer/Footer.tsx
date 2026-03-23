import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_content}>
                    <div className={styles.logo}>Nitesh<span>;</span></div>
                    <a href="mailto:rautesh6@gmail.com" className={styles.email}>
                        rautesh6@gmail.com
                    </a>
                    <p className={styles.copyright}>&copy; niteshraut.com.np</p>
                </div>
            </div>
        </footer>
    )
}
