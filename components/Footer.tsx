import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>About</li>
                <li>Login</li>
            </ul>
        </footer>
    )
}

export default Footer;