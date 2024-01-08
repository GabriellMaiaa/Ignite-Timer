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

  background-color: ${props => props.theme.secondary};

  /* ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }} */
`