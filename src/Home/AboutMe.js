import { SecondaryBtn } from '../shared'
import { AboutMeStyled } from '../Styled/AboutMeStyled'
import { tablet, desktop } from '../shared/MediaQueries'
import profileSml from '../data/images/homepage/mobile/image-homepage-profile-mobile.jpg'
import profileMed from '../data/images/homepage/tablet/image-homepage-profile-tablet.jpg'
import profileLrg from '../data/images/homepage/desktop/image-homepage-profile-desktop.jpg'
const AboutMe = () => {
	return (
		<AboutMeStyled>
			<picture>
				<source srcset={profileLrg} media={desktop} />
				<source srcset={profileMed} media={tablet} />
				<img src={profileSml} alt='headshot' />
			</picture>
			<div className='about-content'>
				<h2>About Me</h2>
				<p>
					I’m a front-end developer looking for a new role in an
					exciting company. I focus on writing accessible and semantic
					HTML, using modern CSS practices and writing clean
					JavaScript. When writing JavaScript code, I mostly use
					React, but I can adapt to whatever tools are required. I’m
					based in Syracuse, UT, but I’m happy working remotely and
					have experience on remote teams. When I’m not coding, you’ll
					find me outdoors shredding the gnar or hanging with the fam.
					Feel free to check out my work.
				</p>
				<SecondaryBtn text={'go to portfolio'} />
			</div>
		</AboutMeStyled>
	)
}

export default AboutMe
