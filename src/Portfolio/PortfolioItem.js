import { SecondaryBtn } from '../shared/SecondaryBtn'
import {
	PortfolioItemStyled,
	PortfolioWrapper,
} from '../Styled/PortfolioItemStyled'
import { tablet, desktop } from '../shared/MediaQueries'
import sanityClient from '../client'
import { useState, useEffect } from 'react'

const PortfolioItem = () => {
	const [projectData, setProject] = useState(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"] {
					title,
					slug,
					mainImage[]{
						asset->{
							_id,
							url
						},
						mediaWidthType,
					alt
					}
				}`
			)
			.then((data) => setProject(data))
			.catch(console.error)
	}, [])


	console.log(projectData)


	return (
		<PortfolioWrapper>
			{projectData &&
				projectData.map((project, index) => (
					<PortfolioItemStyled key={index}>
						{/* <picture>
							<source
								srcset={project.mainImage.find(mediaTypeWidth => mediaTypeWidth === 'Desktop').asset.url}
								media={desktop}
							/>
							<source
								srcset={project.mainImage.find(({mediaTypeWidth}) => mediaTypeWidth === 'Tablet').asset.url}
								media={tablet}
							/>
							<img
								srcset={project.find({mainImage: [{ mediaTypeWidth: 'mobile'}]})}
								alt='manage screenshot'
							/>
						</picture> */}
						<div className='portfolio-item-content'>
							<h2>{project.title}</h2>
							<p>
								This project required me to build a fully
								responsive landing page to the designs provided.
								I used HTML5, along with CSS Grid and JavaScript
								for the areas that required interactivity, such
								as the testimonial slider.
							</p>
							<SecondaryBtn text={'view project'} />
						</div>
					</PortfolioItemStyled>
				))}
		</PortfolioWrapper>
	)
}

export default PortfolioItem
