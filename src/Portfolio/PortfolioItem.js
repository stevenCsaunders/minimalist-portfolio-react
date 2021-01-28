import SecondaryBtn from '../shared/SecondaryBtn'
import { PortfolioItemStyled } from '../Styled/PortfolioItemStyled'
import manage from '../data/images/portfolio/mobile/image-portfolio-manage.jpg'

const PortfolioItem = () => {
	return (
		<PortfolioItemStyled>
			<img
				src={manage}
				alt='manage preview'
			/>
			<div className='portfolio-content-wrapper'>
				<div className='portfolio-item-content'>
					<h3>Manage</h3>
					<p>
						This project required me to build a fully responsive
						landing page to the designs provided. I used HTML5,
						along with CSS Grid and JavaScript for the areas that
						required interactivity, such as the testimonial slider.
					</p>
					<SecondaryBtn text={'view project'} />
				</div>
			</div>
		</PortfolioItemStyled>
	)
}

export default PortfolioItem
