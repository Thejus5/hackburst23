import styled from "styled-components";
import { colors } from "../../core/colors";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  height: fit-content;
  margin-top: 45px;

  border-radius: 12px;
  border: 0.799px solid ${colors.blue};
  background: linear-gradient(
    155deg,
    rgba(0, 73, 183, 0.48) 15.78%,
    rgba(4, 47, 112, 0.47) 84.22%
  );
  box-shadow: 0px 24.259px 38.814px 9.703px rgba(26, 14, 99, 0.3);
  backdrop-filter: blur(3.9965717792510986px);

  .padding {
    padding: 24px 31.5px 15.5px;
  }

  .timerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      text-align: center;
      font-family: Zen Dots;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      color: ${colors.white};
    }
  }

  hr {
    border: 1px solid ${colors.dividerGrey};
    border-width: 1px;
    margin: 15px 0 18px;
  }

  /* @media (max-width: 1300px) {
    width: 650px;
    max-width: 100% !important;
  } */
`;

export const DataTable = styled.table`
  width: 100%;
  .alignLeft {
    text-align: left;
  }
  .noMargin {
    margin: 0;
  }

  td,
  th {
    color: ${colors.white};
    text-align: center;
    font-family: Zen Dots;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    padding-bottom: 15px;
  }

  a {
    text-decoration: underline;
    color: ${colors.white};
  }
`;
