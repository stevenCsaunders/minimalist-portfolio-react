import styled from 'styled-components'

export const MainStyled = styled.main`
	padding: calc(1em + var(--headerHeight)) var(--containerPadding);
	p {
		max-width: 75rem;
		a {
			color: var(--darkBlue);
			text-decoration: none;
			border-bottom: solid 2px var(--cyan);
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-family: var(--headingFont);
		font-weight: var(--textBold);
		line-height: 1.15;
		margin-top: 0;
	}

	small,
	.text_small {
		font-size: var(--textSmall);
	}

	label {
		display: block;
		font-size: var(--textSmall);
		font-weight: var(--textBold);
	}

	input,
	textarea {
		background: var(--grey);
		border: none;
		padding: 1.5rem;
		&:focus {
			outline: 1px solid var(--cyan);
		}
		&::placeholder {
			color: var(--darkBlue);
			opacity: 0.3;
		}
	}

	button {
		text-transform: uppercase;
		font-size: var(--textSmall);
		transition: background 0.3s ease;
	}
`
