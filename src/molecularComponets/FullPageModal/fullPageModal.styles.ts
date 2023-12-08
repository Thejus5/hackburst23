import styled from "styled-components";
import { colors } from "../../core/colors";

export const ModalWrapper = styled.section<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props: any) => (props.open ? "flex" : "none")};
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;

  .innerBox {
    position: relative;
    width: 100%;
    max-width: 770px;
    padding: 45px;
    height: fit-content;
    max-height: 80vh;

    color: ${colors.white};

    border-radius: 12px;
    border: 0.816px solid #4ec2eb;
    background: linear-gradient(
      155deg,
      rgba(0, 73, 183, 0.48) 15.78%,
      rgba(4, 47, 112, 0.47) 84.22%
    );
    box-shadow: 0px 24.766px 39.626px 9.906px rgba(26, 14, 99, 0.3);
    backdrop-filter: blur(4.080182075500488px);
    /* background-color: aqua; */

    .modalHeader {
      font-family: "Zen Dots";
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .closeIcon {
      position: absolute;
      top: -28px;
      right: -28px;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 56px;
      height: 56px;
      border-radius: 100px;
      border-radius: 42px;
      border: 0.639px solid ${colors.blue};
      background: linear-gradient(
        155deg,
        rgba(255, 255, 255, 0.48) 15.78%,
        rgba(255, 255, 255, 0.47) 84.22%
      );
      box-shadow: 0px 19.388px 31.022px 7.755px rgba(26, 14, 99, 0.3);
      backdrop-filter: blur(3.1942298412323px);
      cursor: pointer;
      img {
        width: 32px;
        height: 32px;
      }
    }

    @media (max-width: 800px) {
      overflow-y: scroll;
      padding: 25px;
      padding-bottom: 65px;
      .modalHeader {
        margin-top: 35px;
      }
    }
    @media (max-width: 862px) {
      .closeIcon {
        top: 55px;
        right: 20px;
        width: 25px;
        height: 25px;
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
`;
