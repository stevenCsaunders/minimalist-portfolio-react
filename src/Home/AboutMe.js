import { Link } from 'react-router-dom'
import { SecondaryBtn } from '../shared'
import { AboutMeStyled } from '../Styled/AboutMeStyled'
import BlockContent from '@sanity/block-content-to-react'


const AboutMe = ({ aboutContent }) => {

	console.log(aboutContent);

	return (
		<AboutMeStyled>
			<img
				src={aboutContent.aboutImage.asset.url}
				alt={aboutContent.aboutImage.alt}
			/>

			<div className='about-content' id='about-me'>
				<h2>About Me</h2>
				<BlockContent
									blocks={aboutContent.aboutContent}
									projectId='7icmm84f'
									dataset='production'
								/>
				<Link to={'/portfolio'}>
					<SecondaryBtn text={`go to portfolio`} />
				</Link>
			</div>
		</AboutMeStyled>
	)
}

export default AboutMe
