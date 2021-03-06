import styled from 'styled-components'

export const PortfolioWrapper = styled.div`
  margin-bottom: 10rem;
`

export const PortfolioItemStyled = styled.section`
margin-bottom: 6rem;
  img {
     width: 100%;
     margin-bottom: 2rem; 
    }
	.portfolio-item-content {
		border-top: solid 1px var(--grey);
    border-bottom: solid 1px var(--grey);
    padding: 3rem 0;
		p {
			margin-bottom: 5rem;
		}
	}
  @media (min-width: 768px) {
    display: grid;
    gap: 6rem;
    align-items: center;
    margin-bottom: 6em;
		&:nth-child(odd) {
			grid-template-columns: repeat(2, 1fr);
		}
		&:nth-child(even) {
			grid-auto-flow: dense;
			grid-template-columns: repeat(2, 1fr);
			picture {
				grid-column: 2;
			}
		}
  }
  @media (min-width: 1100px) {
    gap: 8rem;
  }
`
