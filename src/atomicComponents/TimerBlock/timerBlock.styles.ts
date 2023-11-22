import styled from "styled-components";
import { colors } from "../../core/colors";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 210px;
  border-radius: 12.3px;
  border: 0.69px solid ${colors.blue};
  background: linear-gradient(
    155deg,
    rgba(0, 73, 183, 0.48) 15.78%,
    rgba(4, 47, 112, 0.47) 84.22%
  );
  box-shadow: 0px 20px 32px 8px rgba(26, 14, 99, 0.3);
  backdrop-filter: blur(3.2949790954589844px);

  margin-right: 24px;

  .count {
    font-family: "Zen Dots";
    font-size: 68px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${colors.white};
  }

  .label {
    text-align: center;
    font-family: "Zen Dots";
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${colors.white};
  }

  &:last-child{
    margin-right: 0;
  }
`;
