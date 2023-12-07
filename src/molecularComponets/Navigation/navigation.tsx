import { useState } from "react";
import Button from "../../atomicComponents/Button/button";
import Title from "../../atomicComponents/Title/title";
import { texts } from "../../core/texts";
import { StyledNav } from "./navigation.style";
import { appConfig } from "../../core/appConfig";
import RulesModal from "../RulesModal/rulesModal";
import ContactModal from "../ContactModal/contactModal";
import LeaderboardModal from "../LeaderboardModal/leaderboardModal";
import IconButton from "../../atomicComponents/IconButton/iconButton";

import MailIcon from '../../assets/mailIconWhite.svg'

function Navigation() {
  const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isLeaderBoardOpen, setIsLeaderBoardOpen] = useState<boolean>(false);

  const toggleRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };
  const toggleLeaderboard = () => {
    setIsLeaderBoardOpen(!isLeaderBoardOpen);
  };

  const closeModal = () => {
    isRulesOpen && setIsRulesOpen(false);
    isContactOpen && setIsContactOpen(false);
    isLeaderBoardOpen && setIsLeaderBoardOpen(false);
  };

  const navigateToRegistration = () => {
    window.open(appConfig.registrationLink, "_blank");
  };

  return (
    <StyledNav>
      <div className="container">
        <Title />
        <div className="linkWrapper">
          <p className="textLinks" onClick={toggleRules}>
            Rules
          </p>
          <p className="textLinks" onClick={toggleLeaderboard}>
            Leaderboard
          </p>
          <p className="textLinks" onClick={toggleContact}>
            How to play?
          </p>
          <p className="textLinks" onClick={toggleContact}>
            contact
          </p>
          <IconButton icon={MailIcon}/>
        </div>
        <label className="hamburgerMenu">
          <input type="checkbox" />
        </label>
        <aside className="sideBar">
          <div className="sidebarLinks">
            <p className="textLinks" onClick={toggleRules}>
              Rules
            </p>
            <p className="textLinks" onClick={toggleLeaderboard}>
              Leaderboard
            </p>
            <p className="textLinks" onClick={toggleContact}>
              How to play?
            </p>
            <p className="textLinks" onClick={toggleContact}>
              contact
            </p>
            <IconButton icon={MailIcon}/>
          </div>
        </aside>
      </div>

      <RulesModal open={isRulesOpen} closeModal={closeModal} />
      <ContactModal open={isContactOpen} closeModal={closeModal} />
      <LeaderboardModal open={isLeaderBoardOpen} closeModal={closeModal} />

     
    </StyledNav>
  );
}

export default Navigation;
