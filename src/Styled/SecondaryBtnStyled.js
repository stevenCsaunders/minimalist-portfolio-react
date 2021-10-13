import styled from 'styled-components'

export const EmailBtnStyled = styled.button`
	appearance: none;
	white-space: nowrap;
	background: var(--blue);
	border: 1px solid var(--darkBlue);
	color: var(--lightGrey);
	padding: 1.5rem 2.5rem;
	letter-spacing: 1px;
	text-transform: uppercase;
	font-size: var(--textSmall);
	transition: background 0.3s ease;
	&:hover {
		background: var(--lightGray);
		color: var(--darkBlue);
		cursor: pointer;
	}

	&:disabled,
	&[disabled] {
		opacity: 0.3;
	}
`

export const SecondaryBtnStyled = styled.span`
	appearance: none;
	display: block;
	background: var(--lightGrey);
	border: 1px solid var(--darkBlue);
	color: var(--darkBlue);
	padding: 1.5rem 2.5rem;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-align: center;
	font-size: var(--textSmall);
	transition: background 0.3s ease;
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

export const SecondaryBtnDarkStyled = styled.span`
	appearance: none;
	background: var(--blue);
	border: none;
	color: var(--lightGrey);
	padding: 1.5rem 2.5rem;
	letter-spacing: 1px;
	text-transform: uppercase;
	font-size: var(--textSmall);
	transition: background 0.3s ease;
	&:hover {
		background: var(--lightGray);
		color: var(--darkBlue);
		cursor: pointer;
		border: 1px solid var(--darkBlue);
	}

	&:disabled,
	&[disabled] {
		opacity: 0.3;
	}
`
