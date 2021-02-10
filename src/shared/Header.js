import TopNav from './TopNav'
import { HeaderStyled } from '../Styled/HeaderStyled'

const Header = ({ toggle, onClick}) => {
	return (
		<HeaderStyled>
			<TopNav toggle={toggle} onClick={onClick} />
		</HeaderStyled>
	)
};

export default Header