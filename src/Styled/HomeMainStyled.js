import styled from 'styled-components'

export const MainStyled = styled.main`
padding: calc(1em + var(--headerHeight)) var(--containerPadding);
  p {
    margin-bottom: 1.15rem;
    max-width: 50em;
    a {
      color: var(--darkBlue);
      text-decoration: none;
      border-bottom: solid 2px var(--cyan);
    }
  }

  h1,
  h2,
  h3 {
    font-family: var(--headingFont);
    font-weight: 400;
    line-height: 1.15;
  }

  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 700;
  }

  small,
  .text_small {
    font-size: var(--textSmall);
  }

  label {
    display: block;
    font-size: var(--textSmall);
    font-weight: 700;
  }

  input,
  textarea {
    background: var(--grey);
    border: none;
    padding: 20px;
    &:focus {
      outline: 1px solid var(--cyan);
    }
    &::placeholder {
      color: var(--darkBlue);
      opacity: 0.3;
    }
  }

  button {
    text-transform: uppercase;
    font-size: var(--textSmall);
    transition: background 0.3s ease;
  }
`
