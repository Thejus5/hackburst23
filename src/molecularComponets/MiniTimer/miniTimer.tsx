import MiniTimerBlock, {
  TimerDivider,
} from "../../atomicComponents/MiniTimerBlock/miniTimerBlock";
import useTimerEngine from "../../core/utils/useTimerEngine";
import { MiniTimerWrapper } from "./miniTimer.style";

export default function MiniTimer({
  deadlineDate,
}: Readonly<{ deadlineDate: string }>) {
  const { hours, minutes } = useTimerEngine(deadlineDate);
  const minuteArray: Array<string> = String(minutes).split("");
  const hoursArray: Array<string> = String(hours).split("");

  return (
    <MiniTimerWrapper>
      <div className="minutesWrapper">
        {hours < 10 ? (
          <>
            <MiniTimerBlock label={0} />
            <MiniTimerBlock
              label={parseInt(hoursArray[0]) || 0}
              className="marginLeft"
            />
          </>
        ) : (
          <>
            <MiniTimerBlock label={parseInt(hoursArray[0]) || 0} />
            <MiniTimerBlock
              label={parseInt(hoursArray[1]) || 0}
              className="marginLeft"
            />
          </>
        )}
      </div>
      <TimerDivider />
      <div className="secondsWrapper">
        {minutes < 10 ? (
          <>
            <MiniTimerBlock label={0} />
            <MiniTimerBlock
              label={parseInt(minuteArray[0]) || 0}
              className="marginLeft"
            />
          </>
        ) : (
          <>
            <MiniTimerBlock label={parseInt(minuteArray[0]) || 0} />
            <MiniTimerBlock
              label={parseInt(minuteArray[1]) || 0}
              className="marginLeft"
            />
          </>
        )}
      </div>
    </MiniTimerWrapper>
  );
}
