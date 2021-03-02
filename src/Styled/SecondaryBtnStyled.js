import styled from 'styled-components'

export const SecondaryBtnStyled = styled.button`
	appearance: none;
	background: var(--lightGrey);
	border: 1px solid var(--darkBlue);
	color: var(--darkBlue);
	padding: 15px 40px;
	letter-spacing: 1px;

	&:hover {
		background: var(--darkBlue);
		color: var(--lightGrey);
		cursor: pointer;
	}

	&:disabled,
	&[disabled] {
		opacity: 0.3;
	}
`

export const SecondaryBtnDarkStyled = styled.button`
	appearance: none;
	background: var(--darkBlue);
	border: none;
	color: var(--lightGrey);
	padding: 15px 40px;
	letter-spacing: 1px;

	&:hover {
		background: var(--darkBlue);
		color: var(--lightGrey);
		cursor: pointer;
	}

	&:disabled,
	&[disabled] {
		opacity: 0.3;
	}
`
