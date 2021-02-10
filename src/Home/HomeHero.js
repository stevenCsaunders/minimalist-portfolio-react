import { HomeHeroStyled } from '../Styled/HomeHeroStyled'
import { PrimaryBtn } from '../shared'
import heroImg from '../data/images/homepage/mobile/image-homepage-hero.jpg'

const HomeHero = () => {
	return (
		<HomeHeroStyled>
			<img
				src={heroImg}
				alt='homepage hero'
			/>
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
