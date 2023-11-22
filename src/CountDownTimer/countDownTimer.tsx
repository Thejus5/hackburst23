import AppBackground from "../molecularComponets/AppBackground/appBackground";
import Navigation from "../molecularComponets/Navigation/navigation";
import TimerBox from "./TimerBox";

function CountdownTimer() {
  return (
    <AppBackground>
      <Navigation />
      <TimerBox />
    </AppBackground>
  );
}

export default CountdownTimer;
