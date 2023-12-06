import styled from "styled-components";
import { colors } from "../../core/colors";

export const TimerWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 48px;
  border-radius: 7.755px;
  border: 0.639px solid #4ec2eb;
  background: linear-gradient(
    155deg,
    rgba(255, 255, 255, 0.48) 15.78%,
    rgba(255, 255, 255, 0.47) 84.22%
  );
  box-shadow: 0px 19.388px 31.022px 7.755px rgba(26, 14, 99, 0.3);
  backdrop-filter: blur(3.1942298412323px);

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: "Zen Dots";
    font-size: 21.833px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    color: ${colors.white};
  }
`;

export const TimerDividerImage = styled.img`
  height: 15.8px;
  margin: 0 8.5px;
`;
