import { Link, useLocation } from "react-router-dom";
import { Trophy, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link
          to="/"
          className={styles.logoSection}
          onClick={() => setIsMenuOpen(false)}
        >
          <Trophy size={24} className={styles.trophy} />
          <span className={styles.logoText}>CAMPEON</span>
        </Link>

        <div className={styles.navLinks}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={location.pathname === path ? styles.active : ""}
            >
              {label}
            </Link>
          ))}
        </div>

        <div
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={
                location.pathname === path
                  ? `${styles.active} ${styles.mobileLink}`
                  : styles.mobileLink
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
