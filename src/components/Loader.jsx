import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Loader.module.css';

export default function Loader() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.loader}>
      <h1 className={styles.loaderText}>CAMPEON</h1>
    </div>
  );
}
