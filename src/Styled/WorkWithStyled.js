import styled from 'styled-components'

export const WorkWithStyled = styled.section`
	text-align: center;
	h3 {
		font-size: var(--textExtraLarge);
		font-weight: var(--textBold);
		margin-bottom: 4rem;
		padding: 0 1rem;
	}

	hr {
		display: none;
	}
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1.25fr auto;
		align-items: center;
		gap: 2em;
		text-align: left;
    h3 {
      margin: 0;
    }
		.horizontal-line {
			width: 100%;
			border-bottom: 2px solid var(--grey);
		}
		button {
			margin: 0;
			width: 100%;
		}
	}
`
