import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

  useEffect(() => {
    // ...calculate time until targetDate...
    const interval = setInterval(() => {
      // ...update state...
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      {/* ...display timeLeft... */}
    </div>
  );
}
