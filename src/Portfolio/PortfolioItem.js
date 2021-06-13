
import {
	PortfolioItemStyled,
	PortfolioWrapper,
} from '../Styled/PortfolioItemStyled'
import sanityClient from '../client.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlockContent from '@sanity/block-content-to-react'
import { SecondaryBtn } from '../shared'
import Spinner from '../shared/Spinner'

const PortfolioItem = () => {
	const [projectData, setProject] = useState(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"] {
					_id,
					slug,
					title,
					projectOverview,
					portfolioImage {
						asset-> {
							url
						},
						alt
						}
					}`
			)
			.then(data => setProject(data))
			.catch(console.error)
	}, [])
	if (!projectData) return <Spinner/>

	return (
		<PortfolioWrapper>
			{projectData &&
				projectData.map((project, index) => (
					<PortfolioItemStyled key={index}>
						<img
							src={project.portfolioImage.asset.url}
							alt={project.portfolioImage.alt}
						/>
						<div className='portfolio-item-content'>
							<h2>{project.title}</h2>
							<div>
								<BlockContent
									blocks={project.projectOverview}
									projectId='7icmm84f'
									dataset='production'
								/>
							</div>
							<Link to={`/portfolio/${project.slug.current}`} slug={project.slug.current}>
							<SecondaryBtn text={`view project`} />
							</Link>
						</div>
					</PortfolioItemStyled>
				))}
		</PortfolioWrapper>
	)
}

export default PortfolioItem
