import styled from 'styled-components'

export const AboutMeStyled = styled.section`
	img {
		width: 100%;
		margin-bottom: 3rem;
	}
	.about-content {
		padding: 5rem  0;
		border-top: var(--lightDivider);
		border-bottom: var(--lightDivider);
		margin-bottom: 10rem;
		h2 {
			font-size: var(--textExtraLarge);
			margin-bottom: 3rem;
		}
		p {
			margin-bottom: 2rem;
		}
	}
	@media (min-width: 768px) {
		display: flex;
		gap: 8rem;
		margin-bottom: 10rem;
		img, .about-content {
			margin: 0;
		}
		.about-content {
		width: 60%;
		}
		img {
			height: 100%;
			width : 100%;
			object-fit: cover;
      object-position: right;
		}
	}
	@media (min-width: 1100px) {
		gap: 10rem;
		img {
			margin: 0;
		}
	}
`
