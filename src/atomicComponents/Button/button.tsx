import { StyledButton } from "./button.style";

function Button({ label, onClick }: { label: string; onClick?: () => void }) {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}

export default Button;
