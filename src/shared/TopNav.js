import Logo from './Logo'
import Hamburger from './Hamburger'
import { TopNavStyled, NavItem, NavList } from '../Styled/TopNavStyled'

const TopNav = ( { toggle, onClick}) => {
	return (
		<TopNavStyled>
			<Logo />
			<NavList toggle={toggle}>
				<NavItem>
					<a href='/index.html'>Home</a>
				</NavItem>
				<NavItem>
					<a href='/portfolio.html'>Portfolio</a>
				</NavItem>
				<NavItem>
					<a href='/contact.html'>Contact Me</a>
				</NavItem>
			</NavList>
			<Hamburger toggle={toggle} onClick={onClick} />
		</TopNavStyled>
	)
}

export default TopNav;
