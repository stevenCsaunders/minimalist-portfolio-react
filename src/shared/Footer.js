import FooterNav from './FooterNav'
import FooterSocial from './FooterSocial'
import { FooterStyled } from '../Styled/FooterStyled'

const Footer = () => {
	return (
		<FooterStyled>
			<FooterNav />
			<FooterSocial/>
		</FooterStyled>
	)
}

export default Footer
