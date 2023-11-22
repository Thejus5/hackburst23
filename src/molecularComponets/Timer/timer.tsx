import TimerBlock from "../../atomicComponents/TimerBlock/timerBlock";
import { appConfig } from "../../core/appConfig";
import useTimerEngine from "../../core/utils/useTimerEngine";
import { TimerWrapper } from "./timer.styles";

function Timer() {
  const { day, seconds, hours, minutes } = useTimerEngine(
    appConfig.deadLineDate
  );
  return (
    <TimerWrapper>
      <TimerBlock count={day < 10 ? `0${day}` : day} label="Days" />
      <TimerBlock count={hours < 10 ? `0${hours}` : hours} label="Hours" />
      <TimerBlock count={minutes < 10 ? `0${minutes}` : minutes} label="Minutes" />
      <TimerBlock count={seconds < 10 ? `0${seconds}` : seconds} label="Seconds" />
    </TimerWrapper>
  );
}

export default Timer;
