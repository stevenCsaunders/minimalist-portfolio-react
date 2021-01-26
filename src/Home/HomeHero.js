import { HomeHeroStyled, PrimaryBtnStyled } from '../Styled/HomeHeroStyled'
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
				<PrimaryBtnStyled
					className='primary-btn'
					type='button'
				>
					<div
						className='primary-btn-img'
						aria-label='Primary Button Down Arrow Image'
					>
						<svg
							role='img'
							aria-labelledby='primary-button-img'
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='14'
						>
							<title id='primary-button-img'>
								Primary Button Down Arrow Image
							</title>
							<g fill='none' fillRule='evenodd' stroke='#5FB4A2'>
								<path d='M0 9l8 4 8-4' />
								<path opacity='.5' d='M0 5l8 4 8-4' />
								<path opacity='.25' d='M0 1l8 4 8-4' />
							</g>
						</svg>
					</div>
					<div className='primary-btn-text'>
						<span>About Me</span>
					</div>
				</PrimaryBtnStyled>
			</div>
		</HomeHeroStyled>
	)
}

export default HomeHero
