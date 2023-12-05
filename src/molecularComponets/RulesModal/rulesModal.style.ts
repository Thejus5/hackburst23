import styled from "styled-components";
import { colors } from "../../core/colors";

export const RulesWrapper = styled.div`
  width: 100%;
  ul {
    margin: 0;
    padding: 0;
    padding-left: 20px;
  }
  li {
    color: ${colors.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px; /* 211.111% */
  }
`;
