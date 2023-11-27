import { useState } from "react";
import Button from "../../atomicComponents/Button/button";
import Title from "../../atomicComponents/Title/title";
import { texts } from "../../core/texts";
import FullPageModal from "../FullPageModal/fullPageModal";
import { ContactInfoBox, StyledNav } from "./navigation.style";
import { appConfig } from "../../core/appConfig";

function ContactInfo() {
  return (
    <ContactInfoBox>
      <p className="label">Send me your queries @</p>
      <a
        href="mailto:kairo.hackburst@qburst.com"
        target="_blank"
        className="link"
      >
        kairo.hackburst@qburst.com
      </a>
    </ContactInfoBox>
  );
}

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isContact, setIsContact] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsContact(false);
    setIsModalOpen(false);
  };

  const navigateToRegistration = () => {
    window.open(appConfig.registrationLink, "_blank");
  };

  return (
    <StyledNav>
      <div className="container">
        <Title />
        <div className="linkWrapper">
          <p className="textLinks" onClick={toggleModal}>
            Rules
          </p>
          <p className="textLinks" onClick={toggleModal}>
            Leaderboard
          </p>
          <p
            className="textLinks"
            onClick={() => {
              setIsContact(true);
              toggleModal();
            }}
          >
            contact
          </p>
          <Button label={texts.register} onClick={navigateToRegistration} />
        </div>
        <label className="hamburgerMenu">
          <input type="checkbox" />
        </label>
        <aside className="sideBar">
          <div className="sidebarLinks">
            <p className="textLinks" onClick={toggleModal}>
              Rules
            </p>
            <p className="textLinks" onClick={toggleModal}>
              Leaderboard
            </p>
            <p
              className="textLinks"
              onClick={() => {
                setIsContact(true);
                toggleModal();
              }}
            >
              contact
            </p>
            <Button label={texts.register} onClick={navigateToRegistration} />
          </div>
        </aside>
      </div>

      <FullPageModal open={isModalOpen} closeModal={closeModal}>
        {isContact && <ContactInfo />}
      </FullPageModal>
    </StyledNav>
  );
}

export default Navigation;
