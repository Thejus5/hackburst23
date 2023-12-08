import AppBackground from "../molecularComponets/AppBackground/appBackground";
import Navigation from "../molecularComponets/Navigation/navigation";
import { AvatarWrapper, HomeWrapper, LeaderBoardWrapper } from "./home.styles";
import AvatarImage from "../assets/avatar.png";
import LeaderBoard from "../molecularComponets/QuestionBoard/questionBoard";

export default function Home() {
  return (
    <AppBackground>
      <Navigation />
      <HomeWrapper>
      <img className="avatarImage" src={AvatarImage} alt="avatar image" />
        {/* <AvatarWrapper></AvatarWrapper> */}
        <LeaderBoardWrapper>
          <LeaderBoard />
        </LeaderBoardWrapper>
        <img className="avatarImageMobile" src={AvatarImage} alt="avatar image" />
      </HomeWrapper>
    </AppBackground>
  );
}
