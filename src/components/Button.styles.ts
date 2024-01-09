import styled from "styled-components"

export type ButtonVariant = 'primary' | 'secondary' 

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'red',
  secondary: 'orange'
}

export const ButtonContainer = styled.button <ButtonContainerProps>`
  height: 40px;
  width: 100px;
  margin: 6px;
  border: 0;

  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};

  /* ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }} */
`