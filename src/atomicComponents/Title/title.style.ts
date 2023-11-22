import styled from "styled-components";
import { colors } from "../../core/colors";

export const HeaderText = styled.h1`
  text-align: center !important;
  font-family: "Zen Dots", sans-serif;
  font-size: 26.45px;
  color: ${colors.white};
  cursor: pointer;
  @media (max-width: 930px) {
    font-size: 20px;
  }
  @media (max-width: 460px) {
    font-size: 18px;
  }
`;
