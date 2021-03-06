import styled from 'styled-components'

export const HomeHeroStyled = styled.section`
	margin-bottom: 10rem;
	img {
		width: 100%;
		margin-bottom: 2rem;
	}
	

	@media (min-width: 768px) {
		position: relative;
		.hero-header {
			position: absolute;
			padding: 2rem;
			background-color: var(--lightGrey);
			bottom: 0;
			left: 0;
			width: 50%;
			box-shadow: var(--smallShadow);
		}
		@media (min-width: 1100px) {
			.hero-header {
				width: 40%;
			}
		}
	}
`