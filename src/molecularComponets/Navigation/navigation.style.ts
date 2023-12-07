import styled from "styled-components";
import { colors } from "../../core/colors";

export const StyledNav = styled.nav`
  padding: 24px 10px;
  background-color: #3c60b35d; //TODO: change to linear gradient

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1202px;
    max-width: 100%;
    margin: 0 auto;
  }

  .linkWrapper {
    display: flex;
    align-items: center;
  }

  .textLinks {
    font-size: 18px;
    font-weight: 700;
    color: ${colors.white};
    margin-right: 62px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .hamburgerMenu {
    z-index: 2;
    flex-direction: column;
    gap: 5px;

    width: max-content;
    display: none;
  }

  .hamburgerMenu::before,
  .hamburgerMenu::after,
  .hamburgerMenu input {
    content: " ";
    width: 40px;
    height: 3px;
    background-color: ${colors.white};
    border-radius: 100px;

    transform-origin: left center;
    transition: opacity 200ms ease-in-out, width 200ms ease-in-out,
      rotate 200ms ease-in-out, translate 200ms ease-in-out;
  }

  .hamburgerMenu input {
    appearance: none;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  .hamburgerMenu:has(input:checked)::before {
    rotate: 45deg;
    width: calc((3px * 3 + 5px * 2) * 1.41421356237);
    translate: 0 calc(3px / -2);
  }
  .hamburgerMenu:has(input:checked)::after {
    rotate: -45deg;
    width: calc((3px * 3 + 5px * 2) * 1.41421356237);
    translate: 0 calc(3px / 2);
  }

  .hamburgerMenu input:checked {
    opacity: 0;
    width: 0;
  }

  .sideBar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    z-index: 1;

    background: linear-gradient(
      155deg,
      rgba(0, 73, 183, 0.48) 15.78%,
      rgba(4, 47, 112, 0.47) 84.22%
    );
    backdrop-filter: blur(3.2949790954589844px);

    translate: 100%;
    transition: translate 200ms ease-in-out;

    .sidebarLinks {
      margin-top: 100px;
      text-align: center;
      .textLinks {
        width: fit-content;
        margin: 0 auto;
        margin-bottom: 50px;
      }
    }
  }

  .hamburgerMenu:has(input:checked) + .sideBar {
    translate: 0;
  }

  @media (max-width: 930px) {
    .linkWrapper {
      display: none;
    }
    .hamburgerMenu {
      display: flex;
    }
  }
`;
