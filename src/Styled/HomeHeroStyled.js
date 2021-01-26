import styled from 'styled-components'

export const HomeHeroStyled = styled.section`
	
	img {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 3rem;
	}

	@media (min-width: 768px) {
		position: relative;
		.hero-header {
			position: absolute;
			padding: 2rem;
			background-color: var(--lightGrey);
			bottom: 0;
			left: 0;
			width: 80%;
		}
	}
`

export const PrimaryBtnStyled = styled.button`
	color: var(--lightGrey);
	background: var(--blue);
	z-index: 1;
	position: relative;
	width: 50%;
	max-width: 20rem;
	height: 4rem;
	display: grid;
	grid-template-columns: 25% auto;
	align-items: center;
	padding: 0;
	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 25%;
		height: 100%;
		background: var(--black);
		opacity: 0.2;
	}
	&:hover,
	&:hover svg g {
		background: var(--cyan);
		color: var(--lightGrey);
		cursor: pointer;
		stroke: var(--lightGrey);
	}
	&:disabled,
	&:disabled svg g {
		background: var(--grey);
		stroke: white;
		cursor: auto;
		color: white;
	}
	&:disabled::before {
  background: var(--black);
	opacity: 0.1;
	}
`
