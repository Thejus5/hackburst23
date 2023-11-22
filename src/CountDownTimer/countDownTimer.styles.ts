import styled from "styled-components";
import { colors } from "../core/colors";

export const TimerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 920px;
  height: fit-content;
  margin-bottom: 38px;
  /* background-color: #ff0000; */
  
`;

export const CountDownLabelHeader = styled.p`
  padding: 14px;
  background-color: ${colors.purpleBackground};
  width: fit-content;
  border-radius: 17px;

  color: #fff;
  font-family: "Zen Dots";
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;

  margin: 0 auto;
  margin-bottom: 32px;
`;

export const Description = styled.div`
  width: fit-content;
  padding: 18px;
  border-radius: 12px;
  border: 0.659px solid ${colors.blue};
  background: linear-gradient(
    155deg,
    rgba(52, 71, 145, 0.6) 15.78%,
    rgba(39, 40, 105, 0.6) 84.22%
  );
  box-shadow: 0px 20px 32px 8px rgba(26, 14, 99, 0.3);
  backdrop-filter: blur(3.2949790954589844px);

  color: ${colors.white};

  font-size: 16px;
  font-weight: 300;
  line-height: 24px; /* 150% */
  letter-spacing: 0.8px;

  margin: 0 auto;
  margin-top: 44px;

  @media (max-width: 930px) {
   margin: 0 10px;
  }
`;
