import styled from "styled-components";
import { colors } from "../../core/colors";

export const ModalWrapper = styled.section<{open:boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props:any)=> props.open ? 'flex':'none'};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    155deg,
    rgba(0, 73, 183, 0.48) 15.78%,
    rgba(4, 47, 112, 0.47) 84.22%
  );
  backdrop-filter: blur(3.2949790954589844px);
  z-index: 20;

  .innerBox{
    position: relative;
    width: 80%;
    padding: 20px;
    border: 1px solid ${colors.blue};
    border-radius: 12px;
    background-color: #1c1c1c7d;
    .closeIcon{
        position: absolute;
        top: 20px;
        right: 20px;

        width: 15px;
        height: 15px;
        cursor: pointer;
    }
  }
  .modalText{
    color: ${colors.white};
  }
`;
