import MiniTimerBlock, {
  TimerDivider,
} from "../../atomicComponents/MiniTimerBlock/miniTimerBlock";
import { appConfig } from "../../core/appConfig";
import useTimerEngine from "../../core/utils/useTimerEngine";
import { MiniTimerWrapper } from "./miniTimer.style";

export default function MiniTimer({
  deadlineDate = appConfig.deadLineDate,
}: Readonly<{ deadlineDate?: string }>) {
  const { minutes, seconds } = useTimerEngine(deadlineDate);
  const minuteArray: Array<string> = String(minutes).split("");
  const secondsArray: Array<string> = String(seconds).split("");

  return (
    <MiniTimerWrapper>
      <div className="minutesWrapper">
        <MiniTimerBlock label={parseInt(minuteArray[0]) || 0} />
        <MiniTimerBlock
          label={parseInt(minuteArray[1]) || 0}
          className="marginLeft"
        />
      </div>
      <TimerDivider />
      <div className="secondsWrapper">
        <MiniTimerBlock label={parseInt(secondsArray[0]) || 0} />
        <MiniTimerBlock
          label={parseInt(secondsArray[1]) || 0}
          className="marginLeft"
        />
      </div>
    </MiniTimerWrapper>
  );
}
