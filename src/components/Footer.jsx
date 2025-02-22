import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/terms">Terms and Conditions</Link>
      {/* ...other demo links... */}
    </footer>
  );
}
