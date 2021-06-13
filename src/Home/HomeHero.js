import { HashLink as Link } from 'react-router-hash-link'
import { HomeHeroStyled } from '../Styled/HomeHeroStyled'
import { PrimaryBtn } from '../shared'

const HomeHero = ({ homeContent }) => {
	return (
		<HomeHeroStyled>
			<img
				src={homeContent.heroImage.asset.url}
				alt={homeContent.heroImage.alt}
			/>
			<div className='hero-header'>
				<h1>{homeContent.heroContent}</h1>
				<Link to='/#about-me'>
					<PrimaryBtn />
				</Link>
			</div>
		</HomeHeroStyled>
	)
}

export default HomeHero
