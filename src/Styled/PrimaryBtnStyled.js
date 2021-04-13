import styled from 'styled-components';

export const PrimaryBtnStyled = styled.div`
	color: var(--lightGrey);

	width: 50%;
	height: 4rem;
	display: grid;
	grid-template-columns: 25% auto;
	align-items: center;
	padding: 0;
	margin-top: 3rem;
	letter-spacing: 1px;
	border: none;
	.arrow {
		background: var(--darkBlue);
	}
	.about-me {
		background: var(--blue);
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