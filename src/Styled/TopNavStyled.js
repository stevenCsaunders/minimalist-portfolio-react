import styled, { css } from 'styled-components'

export const TopNavStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	width: 100%;
	height: var(--headerHeight);
	.logoTop {
		max-width: 30rem;
	}
`

export const NavList = styled.ul`
	background-color: var(--darkBlue);
	position: fixed;
	z-index: 10;
	top: 6rem;
	right: 10%;
	text-align: center;
	padding: 2rem 7rem;
	opacity: 0;
	transform: translateX(150%);
	transition: all 0.3s ease;
	${({ toggle }) =>
		toggle &&
		css`
			opacity: 1;
			transform: translateX(0);
		`}

	@media (min-width: 768px) {
		display: flex;
		transform: none;
		opacity: 1;
		background: none;
		position: static;
		padding: 0;
	}
`

export const NavItem = styled.li`
	margin: 2rem;
	font-size: var(--textRegular);
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

	@media (min-width: 768px) {
		margin: 0 2rem;
		&:last-child {
			margin-right: 0;
		}
		a {
			color: var(--darkBlue);
			&:hover {
				color: var(--cyan);
			}
			&::after {
				content: '';
				background-color: var(--cyan);
			}
		}
	}
`
