import { StyledButton } from "./button.style";

function Button({ label, onClick }: { label: string; onClick?: () => void }) {
  return <StyledButton>{label}</StyledButton>;
}

export default Button;
