import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer+" bg-primary"}>
        <div className="container">
            <p>&copy; niteshraut.com.np</p>
        </div>
    </footer>
  )
}
