import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import { SecondaryBtn } from '../shared/SecondaryBtn'
import { ProjectStyled } from '../Styled/ProjectStyled'

const Detail = () => {
	const [detail, setDetail] = useState(null)
	const { slug } = useParams()

	useEffect(() => {
		sanityClient
			.fetch(
				`
		*[slug.current == "${slug}"]{
			_id,
			title,
			mainImage {
				asset->{
					url
					},
					alt
				},
				projectOverview,
				roles,
				tech,
				projectBackground,
				projectPreview1 {
					asset->{
						url
						},
						alt
					},
				projectPreview2 {
					asset->{
						url
						},
						alt
					},
				websiteUrl
			}
		`
			)
			.then((data) => setDetail(data[0]))
			.catch(console.error)
	}, [slug])

	if (!detail) return <div>...Loading</div>

	return (
		<ProjectStyled>
			<div className='project-hero'>
				<img
					src={detail.mainImage.asset.url}
					alt={detail.mainImage.alt}
				/>
			</div>
			<article>
				<aside>
					<h2>{detail.title}</h2>
					<div className="project-overview">
						<BlockContent
							blocks={detail.projectOverview}
							projectId='7icmm84f'
							dataset='production'
						/>
					</div>
					<div className='tech'>
						<p>{detail.roles}</p>
						<p>{detail.tech}</p>
					</div>
					{detail.websiteUrl ? <Link to={detail.websiteUrl}><SecondaryBtn text="Visit Website"></SecondaryBtn></Link> : ""}
				</aside>
				<section className='project-background'>
					<h3>Project Background</h3>
					<BlockContent
						blocks={detail.projectBackground}
						projectId='7icmm84f'
						dataset='production'
					/>
					<div className='project-preview'>
						<h3>Project Preview</h3>
						<img
							src={detail.projectPreview1.asset.url}
							alt={detail.projectPreview1.alt}
						/>
						<img
							src={detail.projectPreview2.asset.url}
							alt={detail.projectPreview2.alt}
						/>
					</div>
				</section>
			</article>
		</ProjectStyled>
	)
}

export default Detail
