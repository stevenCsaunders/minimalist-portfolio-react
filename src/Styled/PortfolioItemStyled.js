import styled from 'styled-components'

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
    display: flex;
    gap: 6rem;
    align-items: center;
    picture {
      width: 50%;
    }
    .portfolio-item-content {
      width: 40%;
    }
  }
  @media (min-width: 1100px) {
    gap: 8rem;
  }
`
