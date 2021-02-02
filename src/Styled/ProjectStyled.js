import styled from 'styled-components'

export const ProjectStyled = styled.div`
	article {
		aside {
			border-top: var(--lightDivider);
			border-bottom: var(--lightDivider);
			padding: 2rem 0;
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
	img {
		margin: 2rem 0;
	}
	h4 {
    font-size: var(--textLarge);
    margin: 0 0 .5rem 0;
	}
	p {
		margin: 0 0 2.5rem 0;
	}
`
