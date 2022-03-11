import styled from 'styled-components';
import { darken, transparentize } from 'polished'; 

export const Container = styled.form`
  h2 { 
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input { 
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    background: #E7E9EE;
    
    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;
    
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-body);

    &::placeholder{
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width:100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    border: 0;
    border-radius: 0.25rem;
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const RadioBox = styled.button<RadioBoxProps>`
  width: 50%;
  height: 4rem;
  border: 1px solid #D7D7D7;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };
  color: var(--text-title);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: border-color 0.25s;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')};
  }
  
`