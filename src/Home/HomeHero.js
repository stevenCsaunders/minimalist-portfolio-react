import { HomeHeroStyled } from '../Styled/HomeHeroStyled'
import { PrimaryBtn } from '../shared'
import { tablet, desktop } from '../shared/MediaQueries'
import heroSml from '../data/images/homepage/mobile/image-homepage-hero-mobile.jpg'
import heroMed from '../data/images/homepage/tablet/image-homepage-hero-tablet.jpg'
import heroLrg from '../data/images/homepage/desktop/image-homepage-hero-desktop.jpg'

const HomeHero = () => {
	return (
		<HomeHeroStyled>
			<picture>
				<source srcset={heroLrg} media={desktop} />
				<source srcset={heroMed} media={tablet} />
				<img src={heroSml} alt='computer monitor on desk' />
			</picture>
			<div className='hero-header'>
				<h1>
					Hey, I’m Alex Spencer and I love building beautiful websites
				</h1>
				<PrimaryBtn />
			</div>
		</HomeHeroStyled>
	)
}

export default HomeHero
