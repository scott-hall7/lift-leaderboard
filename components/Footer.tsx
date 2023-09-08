import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>About</li>
                <li>Log in</li>
            </ul>
            <ul>
                <li>create by scott-hall7</li>
            </ul>
        </footer>
    )
}

export default Footer;