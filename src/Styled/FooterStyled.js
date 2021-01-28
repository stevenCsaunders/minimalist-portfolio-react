import styled from 'styled-components'

const FooterStyled = styled.footer`
	background: var(--darkBlue);
	color: var(--lightGrey);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 3em 0;
`
const FooterNavStyled = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 2.5rem;
	ul {
		text-align: center;
		padding: 0;
		margin: 0;
		list-style-type: none;
		li + li {
			margin-top: 2.5rem;
		}
		a {
			color: var(--lightGrey);
			text-decoration: none;
			text-transform: uppercase;
			font-size: var(--textSmall);
			letter-spacing: 2px;
		}
	}
	svg {
		margin: 2em 0;
		path {
			fill: var(--lightGrey);
		}
	}
`

const FooterSocialStyled = styled.div`

ul {
		display: flex;
		list-style-type: none;
		padding: 0;
	}
ul li + li {
		padding-left: 2rem;
	}

a svg path {
  fill: var(--lightGrey);
}
`
export { FooterNavStyled, FooterStyled, FooterSocialStyled}