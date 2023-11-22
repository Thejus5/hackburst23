import { texts } from "../core/texts";
import Timer from "../molecularComponets/Timer/timer";
import { CountDownLabelHeader, Description, TimerContainer } from "./countDownTimer.styles";

function TimerBox() {
  return (
    <TimerContainer>
      <CountDownLabelHeader>{texts.countDownBegins}</CountDownLabelHeader>
      {/* <Timer /> */}
      <Description>
       {texts.description}
      </Description>
    </TimerContainer>
  );
}

export default TimerBox;
