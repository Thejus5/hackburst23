import styled from "styled-components";

import bgImage from "../../assets/backgroundImage1.png";

export const Background = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 662px;
  height: 696px;
  filter: drop-shadow(5px 5px 35px #fff);
  @media (max-width: 890px) {
    width: 600px;
    height: 600px;
  }
  @media (max-width: 540px) {
    width: 550px;
    height: 550px;
  }
  @media (max-width: 460px) {
    width: 400px;
    height: 400px;
    top: 40%;
  }
`;
