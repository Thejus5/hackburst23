import styled from "styled-components";

export const HowToPlayWrapper = styled.div`
  width: 100%;
  height: 75vh;
  position: relative;
  overflow: hidden;

  .scrollDiv {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px; /* Increase/Decrease this value for cross-browser compatibility */
    overflow-y: scroll;
  }
`;
