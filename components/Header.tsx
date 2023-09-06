import Image from 'next/image'
import lightLogo from '../public/light-logo.svg'
import darkLogo from '../public/dark-logo.svg'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.navLeft}>
                <Image
                    src={lightLogo}
                    alt="lift leaderboard logo"
                    height={100}
                    width={100}
                />
                <h2>Lift<br/>Leaderboard</h2>
            </div>
            <nav className={styles.navRight}>
                <ul>
                    <li>About</li>
                    <li>Login</li>
                    <li>Light Mode</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

