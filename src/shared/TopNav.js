import logo from '../data/images/logo.png'
import Hamburger from './Hamburger'
import { TopNavStyled, NavItem, NavList } from '../Styled/TopNavStyled'
import { NavLink } from 'react-router-dom'

const TopNav = ({ toggle, onClick }) => {
	return (
		<TopNavStyled aria-label='top navigation'>
			<NavLink to='/'>
				<img
					className='logoTop'
					src={logo}
					alt='main logo'
					aria-label='logo'
				/>
			</NavLink>
			<NavList toggle={toggle}>
				<NavItem>
					<NavLink to='/' onClick={onClick}>
						Home
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/portfolio' onClick={onClick}>
						Portfolio
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/contact' onClick={onClick}>
						Contact Me
					</NavLink>
				</NavItem>
			</NavList>
			<Hamburger toggle={toggle} onClick={onClick} />
		</TopNavStyled>
	)
}

export default TopNav
