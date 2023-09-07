'use-client'

import Image from 'next/image'
import lightLogo from '../public/light-logo.svg'
import darkLogo from '../public/dark-logo.svg'
import lightMode from '../public/light_mode.svg'
import darkMode from '../public/dark_mode.svg'
import styles from './header.module.css'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <header className={styles.mainHeader}>
            <div className={styles.navLeft}>
                <Image
                    src={theme === 'light' ? lightLogo : darkLogo}
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
                    <button className={styles.themeButton} onClick={() => changeTheme()}>
                        <Image
                            src={theme === 'light' ? darkMode : lightMode}
                            alt="lift leaderboard logo"
                            height={32}
                            width={32}
                        />
                    </button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

