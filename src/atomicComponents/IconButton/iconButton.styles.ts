import styled from "styled-components";
import { colors } from "../../core/colors";

export const StyledButton = styled.button`
  outline: none;
  border: 1px solid ${colors.buttonBlue};
  background-color: ${colors.buttonBlue};
  border-radius: 15px;
  padding: 10px 14px;
  cursor: pointer;

  img{
    width: 32px;
    height: 32px;
  }

  @media (max-width: 930px){
    width: 80vw;
  }
`;
