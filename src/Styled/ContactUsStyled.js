import styled from 'styled-components'

export const ContactUsStyled = styled.section`
	border-top: 1px solid var(--grey);
	border-bottom: 1px solid var(--grey);
	padding: 2rem 0;
	margin-bottom: 4rem;
	p {
		margin-bottom: 2rem;
	}
	ul {
		display: flex;
		margin-bottom: 2rem;
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
			width: 100%;
		}
		p {
			margin-bottom: 3rem;
			padding: 0;
		}
	}
`

export const ContactFormStyled = styled.section`
	form {
		font-size: var(--textRegular);
		input,
		textarea {
			width: 100%;
			margin-bottom: 2rem;
			&:valid {
				border-left: 1rem solid var(--cyan);
			}
		}
		textarea {
			min-height: 10rem;
			margin-bottom: 1rem;
		}
		label {
			margin-bottom: 0.25rem;
			font-size: var(--textRegular);
			font-weight: var(--textBold);
		}
		.error-text {
			color: var(--red);
			font-style: italic;
			font-size: var(--textSmall);
		}
		.form-submit {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		.submit-success {
			text-align: center;
			padding: 1rem 2.5rem;
			letter-spacing: 1px;
			text-transform: uppercase;
			font-size: var(--textSmall);
			border-width: 1px 1px 1px 1rem;
			border-style: solid;
			border-color: var(--cyan);
			color: var(--cyan);
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
			.form-submit {
				flex-direction: row;
			}
			.submit-success {
				text-align: left;
				width: 100%;
			}
		}
	}
`
