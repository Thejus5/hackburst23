import styled from "styled-components";
import { colors } from "../../core/colors";

export const StyledButton = styled.button`
  padding: 14px 43px;
  border-radius: 14px;
  background-color: ${colors.purpleBackground};
  outline: none;
  border: 1px solid ${colors.purpleBackground};
  cursor: pointer;
  color: ${colors.white};

  font-family: "JetBrains Mono", monospace;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 700;

  text-transform: uppercase;
`;
