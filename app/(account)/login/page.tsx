/* eslint-disable react/no-unescaped-entities */
import styles from './page.module.css'
import Link from 'next/link'

export default function LogIn() {
    return (
      <div className={styles.loginPage}>
        <h1>
            Log in
        </h1>
        <form className={styles.loginForm}>
          <p className={styles.requiredFieldText}>*indicates required field</p>
          <div className={styles.loginDiv}>
            <label htmlFor="username">*Username or Email</label>
            <input 
              id="username" 
              name="username" 
              type="text" 
              className={styles.loginInput}
              required
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
            />
          </div>
          <button type='submit' className={styles.loginButton}>Log in</button>
          <p className={styles.signUpText}>Don't have account, yet?<br/><b><Link href="/signup">Sign up!</Link></b></p>
        </form>
      </div>
    )
  }
  
  