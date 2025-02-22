import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        {[
          { path: '/', label: 'Home' },
          { path: '/events', label: 'Events' },
          // { path: '/about', label: 'About' },
          // { path: '/leaderboard', label: 'Leaderboard' },
          // { path: '/faq', label: 'FAQ' }
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={location.pathname === path ? styles.active : ''}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
