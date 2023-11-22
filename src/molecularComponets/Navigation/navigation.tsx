import { useState } from "react";
import Button from "../../atomicComponents/Button/button";
import Title from "../../atomicComponents/Title/title";
import { texts } from "../../core/texts";
import FullPageModal from "../FullPageModal/fullPageModal";
import { StyledNav } from "./navigation.style";
import { appConfig } from "../../core/appConfig";

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [modalType, setModalType] = useState<string>("");

  const toggleModal = (openedModal: string) => {
    setModalType(openedModal);
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
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
          <p
            className="textLinks"
            onClick={() => {
              toggleModal("rules");
            }}
          >
            Rules
          </p>
          <p
            className="textLinks"
            onClick={() => {
              toggleModal("leaderboard");
            }}
          >
            Leaderboard
          </p>
          <Button label={texts.register} onClick={navigateToRegistration}/>
        </div>
        <label className="hamburgerMenu">
          <input type="checkbox" />
        </label>
        <aside className="sideBar">
          <div className="sidebarLinks">
            <p
              className="textLinks"
              onClick={() => {
                toggleModal("rules");
              }}
            >
              Rules
            </p>
            <p
              className="textLinks"
              onClick={() => {
                toggleModal("leaderboard");
              }}
            >
              Leaderboard
            </p>
            <Button label={texts.register} onClick={navigateToRegistration} />
          </div>
        </aside>
      </div>

      <FullPageModal
        open={isModalOpen}
        type={modalType}
        closeModal={closeModal}
      />
    </StyledNav>
  );
}

export default Navigation;
