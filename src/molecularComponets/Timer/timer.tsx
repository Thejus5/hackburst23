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
      <TimerBlock count={day} label="Days" />
      <TimerBlock count={hours} label="Hours" />
      <TimerBlock count={minutes} label="Minutes" />
      <TimerBlock count={seconds} label="Seconds" />
    </TimerWrapper>
  );
}

export default Timer;
