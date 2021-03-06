import styled from 'styled-components';

export const Container = styled.form`
  max-width: 560px;
  display: flex;
  align-items: center;
  flex-direction: column;

  input, textarea {
    background: var(--gray);
    color: var(--input-text);
    border-style: none;
    border-radius: 8px;
    width: 320px;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
  }

  textarea {
    margin-bottom: 0.5rem;
    height: 250px;
  }

  input::placeholder, textarea::placeholder {
    color: var(--input-placeholder)
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    
    p {
      color: var(--gray);
      font-weight: 500;

      span {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--input-placeholder);
      }
    }
  }

  button {
    background: var(--yellow);
    border-style: none;
    border-radius: 100px;
    padding: 1.2rem 3rem;
    font-size: 1.3rem;
    font-weight: 700;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
    
    @media (max-width: 1023px) {
      margin-bottom: 5rem;
    }
  }
`