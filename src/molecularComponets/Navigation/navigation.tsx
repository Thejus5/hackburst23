import { useState } from "react";
import Button from "../../atomicComponents/Button/button";
import Title from "../../atomicComponents/Title/title";
import { texts } from "../../core/texts";
import { StyledNav } from "./navigation.style";
import { appConfig } from "../../core/appConfig";
import RulesModal from "../RulesModal/rulesModal";
import ContactModal from "../ContactModal/contactModal";

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };
  const toggleContact = () => {
    setIsContactOpen(!isRulesOpen);
  };

  const closeModal = () => {
    isModalOpen && setIsModalOpen(false);
    isRulesOpen && setIsRulesOpen(false);
    isContactOpen && setIsContactOpen(false);
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
          <p className="textLinks" onClick={toggleModal}>
            Leaderboard
          </p>
          <p className="textLinks" onClick={toggleContact}>
            contact
          </p>
          <Button label={texts.register} onClick={navigateToRegistration} />
        </div>
        <label className="hamburgerMenu">
          <input type="checkbox" />
        </label>
        <aside className="sideBar">
          <div className="sidebarLinks">
            <p className="textLinks" onClick={toggleRules}>
              Rules
            </p>
            <p className="textLinks" onClick={toggleModal}>
              Leaderboard
            </p>
            <p className="textLinks" onClick={toggleContact}>
              contact
            </p>
            <Button label={texts.register} onClick={navigateToRegistration} />
          </div>
        </aside>
      </div>

      <RulesModal open={isRulesOpen} closeModal={closeModal} />
      <ContactModal open={isContactOpen} closeModal={closeModal}/>
    </StyledNav>
  );
}

export default Navigation;
