import AppBackground from "../molecularComponets/AppBackground/appBackground";
import Navigation from "../molecularComponets/Navigation/navigation";
import { AvatarWrapper, HomeWrapper, LeaderBoardWrapper } from "./home.styles";
import AvatarImage from '../assets/avatar.png'
import MiniTimerBlock from "../atomicComponents/MiniTimerBlock/miniTimerBlock";
import MiniTimer from "../molecularComponets/MiniTimer/miniTimer";

export default function Home() {
  return (
    <AppBackground>
      <Navigation />
      <HomeWrapper>
        <AvatarWrapper>
          <img src={AvatarImage} alt="avatar image"/>
        </AvatarWrapper>
        <LeaderBoardWrapper>
         <MiniTimer/>
        </LeaderBoardWrapper>
      </HomeWrapper>
    </AppBackground>
  );
}
