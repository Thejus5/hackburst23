import styled from "styled-components";
import { colors } from "../../core/colors";

export const HeaderText = styled.h1`
  font-family: "Zen Dots", sans-serif;
  font-size: 26.45px;
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 930px) {
    font-size: 20px;
  }
  @media (max-width: 460px) {
    font-size: 18px;
  }
`;
