import styled from 'styled-components'

export const PortfolioItemStyled = styled.section`
margin-bottom: 4rem;
  img {
     width: 100%;
     margin-bottom: 2rem; 
    }
	.portfolio-item-content {
		border-top: solid 1px var(--grey);
    border-bottom: solid 1px var(--grey);
    padding: 3rem 0;

		h2 {
			font-size: var(--textExtraLarge);
			margin-bottom: 2rem;
		}
		p {
			margin-bottom: 5rem;
		}
	}
`
