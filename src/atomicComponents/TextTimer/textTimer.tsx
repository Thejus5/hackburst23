import useTimerEngine from "../../core/utils/useTimerEngine";

export default function TextTimer({ deadLine }: { deadLine: string }) {
  const { hours, minutes, seconds } = useTimerEngine(deadLine);

  const displayHours: string = hours < 10 ? `0${hours}` : `${hours}`;
  const displayMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const displaySeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <p>
      {displayHours}:{displayMinutes}:{displaySeconds}
    </p>
  );
}
