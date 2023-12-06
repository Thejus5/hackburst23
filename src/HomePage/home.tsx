import AppBackground from "../molecularComponets/AppBackground/appBackground";
import Navigation from "../molecularComponets/Navigation/navigation";
import { AvatarWrapper, HomeWrapper, LeaderBoardWrapper } from "./home.styles";
import AvatarImage from '../assets/avatar.png'

export default function Home() {
  return (
    <AppBackground>
      <Navigation />
      <HomeWrapper>
        <AvatarWrapper>
          <img src={AvatarImage} alt="avatar image"/>
        </AvatarWrapper>
        <LeaderBoardWrapper>
          <p>Hello</p>
        </LeaderBoardWrapper>
      </HomeWrapper>
    </AppBackground>
  );
}
