'use client'

/* eslint-disable react/no-unescaped-entities */
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './page.module.css'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div className={styles.loginPage}>
      <h1>
          Log in or Sign up
      </h1>
      <form className={styles.loginForm}>
        <p className={styles.requiredFieldText}>*indicates required field</p>
        <div className={styles.loginDiv}>
          <label htmlFor="email">*Email</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            className={styles.loginInput}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className={styles.loginDiv}>
          <label htmlFor="password">*Password</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            className={styles.loginInput}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='button' className={styles.loginButton} onClick={handleSignIn}>Log in</button>
        <p className={styles.signUpText}>Don't have account, yet?<br/><button type='button' className={styles.signupButton} onClick={handleSignUp}>Sign up!</button></p>
      </form>
    </div>
  )
}

export default LogIn;
  
  