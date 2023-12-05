import styled from "styled-components";
import { colors } from "../../core/colors";

export const ContactInfoBox = styled.div`
  width: 400px;
  max-width: 100%;
  color: ${colors.white};
  .label {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .link {
    text-decoration: none;
    color: ${colors.white};
    cursor: pointer;
    // -
  }
`;
