import { FooterNavStyled } from '../Styled/FooterStyled'
import { NavLink } from 'react-router-dom';
import logoIcon from '../data/images/logoIcon-w.png'

const FooterNav = () => {
	return (
		<FooterNavStyled>
			<NavLink to='/'>
				<img src={logoIcon} alt="logo icon"/>
			</NavLink>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/portfolio'>Portfolio</NavLink>
				</li>
				<li>
					<NavLink to='/contact'>Contact Me</NavLink>
				</li>
			</ul>
		</FooterNavStyled>
	)
}

export default FooterNav
