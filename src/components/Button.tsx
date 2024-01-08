import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({variant = 'primary'}: ButtonProps) {
  return(
    <div>
      <ButtonContainer variant={variant}>Clique</ButtonContainer>
    </div>
  )
}