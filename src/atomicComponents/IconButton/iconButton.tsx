import { StyledButton } from "./iconButton.styles";

export default function IconButton({ icon }: Readonly<{ icon: any }>) {
  return (
    <StyledButton>
      <img src={icon} alt="icon" />
    </StyledButton>
  );
}
