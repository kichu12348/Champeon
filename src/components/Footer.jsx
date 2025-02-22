import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link to="/" className={styles.footerLink}>Home</Link>
        <Link to="/terms" className={styles.footerLink}>Terms</Link>
        <Link to="/privacy" className={styles.footerLink}>Privacy</Link>
        <Link to="/contact" className={styles.footerLink}>Contact</Link>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          Instagram
        </a>
      </div>
    </footer>
  );
}
