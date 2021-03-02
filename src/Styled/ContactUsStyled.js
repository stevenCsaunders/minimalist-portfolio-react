import styled from 'styled-components'

export const ContactUsStyled = styled.section`
	border-top: 1px solid var(--grey);
	border-bottom: 1px solid var(--grey);
	padding: 2rem 0;
	margin-bottom: 4rem;
	ul {
		display: flex;
		li {
			margin-right: 2rem;
		}
	}
	@media (min-width: 1100px) {
		display: flex;
		gap: 6rem;
		padding: 4rem 0;
		h2 {
			width: 50%;
		}
    div {
      width: 100%
    }
		p {
			margin-bottom: 3rem;
      padding: 0;
		}
	}
`

export const ContactFormStyled = styled.section`
	form {
		input,
		textarea {
			width: 100%;
			margin-bottom: 2rem;
		}
		textarea {
			min-height: 10rem;
		}
		label {
			margin-bottom: 1rem;
		}
	}
  @media (min-width: 1100px) {
		display: flex;
		gap: 6rem;
		padding: 4rem 0;
		h2 {
			width: 50%;
		}
    form {
      width: 100%;
    }
	}
`
