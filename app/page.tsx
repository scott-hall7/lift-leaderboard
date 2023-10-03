import styles from './page.module.css'


const Home = () => {
  return (
    <div className={styles.homePage}>
      <h1>Track your top lifts, all in one place. 💪</h1>
      <button className={styles.getstartedButton}>Get Started</button>
    </div>
  )
}

export default Home;

