import styled, { keyframes } from "styled-components";

const bobAnimation = keyframes`
    0% {
      margin-top: -10px;
    }
    100% {
      margin-top: 10px;
    }
`;

export const HomeWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 90vh;
  margin: 0 auto;

  .avatarImage{
    width: 100%;
    height: auto;
    /* animation: ${bobAnimation} 2s infinite alternate; */
  }

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column-reverse;
    overflow-y: scroll;
    .avatarImage{
      width: 75%;
      margin: 0 auto;
    }
  }
`;

export const AvatarWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    animation: ${bobAnimation} 2s infinite alternate;
  }
  @media (max-width: 1000px) {
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: center;
  }
`;

export const LeaderBoardWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 0 10px;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1000px) {
    padding: 0;
  }

`;
