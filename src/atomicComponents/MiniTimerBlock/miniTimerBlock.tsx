import { TimerDividerImage, TimerWrapper } from "./miniTimerBlock.styles";
import TimerDividerIcon from "../../assets/timerDivider.png";

export default function MiniTimerBlock({
  label,
  className,
}: Readonly<{ label: number; className?: string }>) {
  return (
    <TimerWrapper className={className}>
      <p>{label}</p>
    </TimerWrapper>
  );
}

function TimerDivider() {
  return <TimerDividerImage src={TimerDividerIcon} alt=":" />;
}

export { TimerDivider };
