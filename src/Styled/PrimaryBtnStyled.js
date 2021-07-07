import styled from 'styled-components'

export const PrimaryBtnStyled = styled.div`
	color: var(--lightGrey);
	width: 20rem;
	display: grid;
	grid-template-columns: 25% 1fr;
	margin-top: 3rem;
	border: none;
	opacity: 1;
	.arrow {
		grid-area: 1 / 1 / 1 / 1;
		background: var(--darkBlue);
		padding: 1.2rem 0;
		text-align: center;
		opacity: .5;
		z-index: 9;
		svg {
			margin-top: .2rem;
		}
	}
	.about-me {
		transition: background 0.3s ease;
		grid-area: 1 / 4 / 1 / 1;
		background: var(--blue);
		padding: 1.2rem 0 1.2rem 25%;
		text-align: center;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-size: var(--textSmall);
	}

	&:hover .about-me,
	&:hover svg g {
		transition: all .5;
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
