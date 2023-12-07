import styled from "styled-components";

export const TagWrapper = styled.p<{ bgColor: string }>`
  width: fit-content;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  color: #fff;
  text-align: center;
  font-family: "Zen Dots";
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  background-color: ${(props: any) => props.bgColor};
`;
