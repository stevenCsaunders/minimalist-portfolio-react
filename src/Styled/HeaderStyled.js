import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background-color: var(--lightGrey);
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 var(--containerPadding);
  @media (min-width: 1100px) {
		padding-left: 20%;
		padding-right: 20%;
	}
`