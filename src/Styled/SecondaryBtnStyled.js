import styled from 'styled-components'

export const SecondaryBtnStyled = styled.button`
	appearance: none;
	background: var(--lightGrey);
	border: 1px solid var(--darkBlue);
	color: var(--darkBlue);
	padding: 20px 40px;
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
