import Button from "../../atomicComponents/Button/button";
import Title from "../../atomicComponents/Title/title";
import { texts } from "../../core/texts";
import { StyledNav } from "./navigation.style";

function Navigation() {
  return (
    <StyledNav>
      <div className="container">
        <Title />
        <div className="linkWrapper">
          <p className="textLinks">Rules</p>
          <p className="textLinks">Leaderboard</p>
          <Button label={texts.register} />
        </div>
        <label className="hamburgerMenu">
          <input type="checkbox" />
        </label>
        <aside className="sideBar">
          <div className="sidebarLinks">
            <p className="textLinks">Rules</p>
            <p className="textLinks">Leaderboard</p>
            <Button label={texts.register} />
          </div>
        </aside>
      </div>
    </StyledNav>
  );
}

export default Navigation;
