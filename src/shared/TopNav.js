import Logo from './Logo'
import Hamburger from './Hamburger'
import { TopNavStyled, NavItem, NavList } from '../Styled/TopNavStyled'
import { NavLink } from 'react-router-dom'

const TopNav = ({ toggle, onClick }) => {
	return (
		<TopNavStyled>
			<Logo />
			<NavList toggle={toggle}>
				<NavItem>
					<NavLink to='/'>Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/portfolio'>Portfolio</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/contact'>Contact Me</NavLink>
				</NavItem>
			</NavList>
			<Hamburger toggle={toggle} onClick={onClick} />
		</TopNavStyled>
	)
}

export default TopNav
