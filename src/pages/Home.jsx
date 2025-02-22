import Countdown from '../components/Countdown';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 style={{ fontSize: '4rem' }}>CAMPEON</h1>
      <Countdown targetDate="2025-03-20T00:00:00" />
      {/* ...optional content... */}
    </>
  );
}
