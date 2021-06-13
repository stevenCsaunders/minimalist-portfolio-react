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
		height: 100%;
		border-top: solid 1px var(--grey);
		border-bottom: solid 1px var(--grey);
		padding: 3rem 0;
		p {
			margin-bottom: 5rem;
		}
	}
	@media (min-width: 768px) {
		display: grid;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		margin-bottom: 10rem;
		&:nth-child(odd) {
			grid-template-columns: repeat(2, 1fr);
		}
		&:nth-child(even) {
			grid-auto-flow: dense;
			grid-template-columns: repeat(2, 1fr);
			img {
				grid-column: 2;
			}
		}
		.portfolio-item-content {
			width: 70%;
			justify-self: center;
			align-self: center;
		}
		img {
			height: 100%;
			margin-bottom: 0;
			object-fit: contain;
			object-position: top;
		}
	}
	@media (min-width: 1100px) {
		gap: 0;
		.portfolio-item-content {
			width: 80%;
		}
	}
`
