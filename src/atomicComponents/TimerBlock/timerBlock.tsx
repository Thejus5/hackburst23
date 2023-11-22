import { Block } from "./timerBlock.styles";

function TimerBlock({
  label,
  count,
}: Readonly<{ label: string; count: number | string }>) {
  return (
    <Block>
      <p className="count">{count}</p>
      <p className="label">{label}</p>
    </Block>
  );
}

export default TimerBlock;
