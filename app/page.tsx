import styles from './page.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.main}>
        <h1>Track your top lifts, all in one place. 💪</h1>
        <button className={styles.getStartedButton}>Get Started</button>
      </main>
      <Footer />
    </div>
  )
}

