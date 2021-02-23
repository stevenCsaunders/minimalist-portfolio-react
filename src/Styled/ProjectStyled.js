import styled from 'styled-components'

export const ProjectStyled = styled.div`
	.project-hero {
		img {
		width: 100%;
		margin-bottom: 4rem;
		}
	}
	article {
		aside {
			border-top: var(--lightDivider);
			border-bottom: var(--lightDivider);
			padding: 3rem 0;
			margin-bottom: 6rem;
			p {
				margin-bottom: 4rem;
			}
			.tech {
				color: var(--cyan);
				margin-bottom: 3rem;
				p {
					margin: 0;
				}
			}
		}
	}
	section {
		p {
			margin-bottom: 6rem;
		}
		.project-preview {
			margin-bottom: 3rem;
			img {
				width: 100%;
				margin-bottom: 3rem;
			}
		}
	}
`

export const ProjectNavStyled = styled.section`
	display: flex;
	justify-content: space-between;
	border-top: var(--lightDivider);
	border-bottom: var(--lightDivider);
	margin-bottom: 8rem;
	div + div {
		text-align: right;
		border-left: var(--lightDivider);
		width: 50%;
	}
	a {
		text-decoration: none;
		color: var(--darkBlue);
	}
	img {
		margin: 2rem 0;
	}
	h4 {
		font-size: var(--textMedium);
		margin: 0 0 0.5rem 0;
	}
	p {
		margin: 0 0 2.5rem 0;
	}
`
