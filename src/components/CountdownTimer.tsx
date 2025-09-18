import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 sm:gap-6 text-center">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div
          key={interval}
          className="card-cyber rounded-xl p-4 sm:p-6 min-w-[80px] sm:min-w-[100px] animate-cyber-pulse"
        >
          <div className="text-2xl sm:text-4xl font-bold font-orbitron text-primary mb-1">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
            {interval}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;