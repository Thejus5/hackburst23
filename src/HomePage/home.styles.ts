import styled, { keyframes } from "styled-components";

const bobAnimation = keyframes`
    0% {
        top: -10px;
    }
    100% {
        top: 10px;
    }
`;

export const HomeWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    animation: ${bobAnimation} 2s infinite alternate;
  }
`;

export const LeaderBoardWrapper = styled.div`
  width: 100%;
  background-color: azure;
`;
