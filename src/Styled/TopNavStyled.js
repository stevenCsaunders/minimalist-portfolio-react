import styled, { css } from 'styled-components'

export const TopNavStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
  width: 100%;
  height: var(--headerHeight);
`

export const NavList = styled.ul`
    background-color: var(--darkBlue);
    position: fixed;
    top: 6rem;
    right: 10%;
    text-align: center;
    padding: 1rem 3rem;
    opacity: 0;
    transform: translateX(150%);
    transition: all 0.3s ease;
	${({ toggle }) =>
		toggle &&
		css`
			opacity: 1;
			transform: translateX(0);
		`}
`

export const NavItem = styled.li`
	margin: 1rem;
	a {
		color: var(--lightGrey);
		position: relative;
		&::after {
			content: '';
			background-color: var(--lightGrey);
			position: absolute;
			left: 0;
			bottom: -2rem;
			height: 2px;
			width: 100%;
			opacity: 0;
			transition: all 0.3s ease;
		}
		&:hover::after {
			transform: translateY(-1.5rem);
			opacity: 1;
		}
	}
`
