import { useEffect, useState } from "react";

interface TimerData {
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useTimerEngine(deadLine: string): TimerData {
  const [day, setDay] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const getTimer = () => {
    const timer = Date.parse(deadLine) - Date.now();

    if (timer >= 0) {
      setDay(Math.floor(timer / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timer / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((timer / 1000 / 60) % 60));
      setSeconds(Math.floor((timer / 1000) % 60));
    } else {
      setDay(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTimer(), 1000);

    return () => clearInterval(interval);
  }, [deadLine]);

  return {
    day,
    hours,
    minutes,
    seconds,
  };
}

export default useTimerEngine;
