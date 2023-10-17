'use client'
import Image from 'next/image'
import lightLogo from '../public/light-logo.svg'
import darkLogo from '../public/dark-logo.svg'
import lightMode from '../public/light_mode.svg'
import darkMode from '../public/dark_mode.svg'
import styles from './header.module.css'
import Link from 'next/link'
import LogOutButton from './Logout'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import LogInButton from './Login'

const Header = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()
    const [user, setUser] = useState(false)

    useEffect(() => {
        setMounted(true)

        async function findUser()  {
            const { data: { user } } = await supabase.auth.getUser()
            console.log(user)

        }
        


      }, [])
    
      if (!mounted) {
        return null
      }

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <header className={styles.mainHeader}>
            <Link href="/" className={styles.navLeft}>
                <Image
                    src={theme === 'light' ? lightLogo : darkLogo}
                    alt="lift leaderboard logo"
                    height={100}
                    width={100}
                    className={styles.logo}
                />
                <h2>Lift<br/>Leaderboard</h2>
            </Link>
            <nav className={styles.navRight}>
                <ul>
                    <LogInButton />
                    <LogOutButton />
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

