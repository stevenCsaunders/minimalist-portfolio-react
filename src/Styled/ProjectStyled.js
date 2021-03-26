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
	.project-background {
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
	@media (min-width: 768px) {
		article {
			aside {
				display: grid;
				grid: repeat(2, auto) / repeat(2, auto);
				align-items: start;
				grid-column-gap: 4em;
				grid-row-gap: 1.5em;
				h2 {
					margin: 0;
					grid: 1 / 2;
				}
				.project-overview {
					grid-row: 1 / 4;
					margin: 0;
				}
				.tech {
					margin-bottom: 2rem;
					grid-row: 2 / 3;
				}
				span {
					grid-column-start: 1;
					grid-row-start: 3;
					width: 75%;
				}
			}
		}
	}
	@media (min-width: 1100px) {
		article {
			display: grid;
			grid-template-columns: 0.75fr 1fr;
			grid-template-rows: 0.25fr 1fr;
			gap: 8rem;
			aside {
				padding: 4rem 0;
				display: block;
				grid-column-start: 1;
				grid-row-start: 1;
				h2 {
					margin-bottom: 2rem;
				}
				p {
					margin-bottom: 2rem;
				}
			}
			section {
				grid-row: 1 / -1;
				grid-column: 2 / -1;
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
	.next {
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

	@media (min-width: 768px) {
		.previous-arrow,
		.next-arrow {
			padding: 2rem 0;
			display: flex;
			align-items: center;
			img,
			p {
				margin: 0;
			}
			p {
				color: var(--gray);
			}
		}
		.previous-arrow {
			img {
				margin-right: 3rem;
			}
		}
		.next-arrow {
			display: flex;
			flex-direction: row-reverse;
			justify-content: flex-start;
			img {
				margin-left: 3rem;
			}
		}
	}
`
