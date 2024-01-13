import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  /* serve para que a tela quebre quando for diminuindo com a responsividade */
`
export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  display: flex;
  overflow: hidden;
  justify-content: center;
`
export const StartCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  width: 100%;
  height: 4rem;
  padding: 1rem;
  border: 0;
  border-radius: 8px;

  font-weight: bold;
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
    transition: 0.3s;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
