import styled from 'styled-components'

const FooterStyled = styled.footer`
	background: var(--darkBlue);
	color: var(--lightGrey);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 2.5rem var(--containerPadding);
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
	@media (min-width: 1100px) {
		padding-left: 20%;
		padding-right: 20%;
	}
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
	img{
		margin: 2em 0;
		width: 5rem
	}
	@media (min-width: 768px) {
		flex-direction: row;
		margin-bottom: 0;
		ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			li {
				margin: 0 4rem 0 0;
			}
			li + li {
			margin-top: 0;
		}
		}
		img {
			margin: 0 4rem 0 0;
		}
	}
`

const FooterSocialStyled = styled.div`
	ul {
		display: flex;
		padding: 0;
	}
	ul li + li {
		padding-left: 2rem;
	}

	a svg path {
		fill: var(--lightGrey);
	}
`
export { FooterNavStyled, FooterStyled, FooterSocialStyled }
