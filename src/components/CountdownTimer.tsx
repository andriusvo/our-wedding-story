import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-sage/30 bg-background/50 backdrop-blur-sm">
              <span className="font-serif text-2xl md:text-3xl font-light text-foreground">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 text-sage/50 font-light hidden md:block">
                :
              </span>
            )}
          </div>
          <p className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground mt-2">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
