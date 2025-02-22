import Countdown from '../components/Countdown';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>CAMPEON</h1>
        <p className={styles.subtitle}>INTERCOLLEGE SPORTS TOURNAMENT</p>
        <Countdown targetDate="2025-03-20T00:00:00" />
      </div>
    </div>
  );
}
