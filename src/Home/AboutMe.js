import profileImg from '../data/images/homepage/mobile/image-homepage-profile.jpg'
import SecondaryBtn from '../shared/SecondaryBtn'
import { AboutMeStyled } from '../Styled/AboutMeStyled'
const AboutMe = () => {
	return (
		<AboutMeStyled>
			<img src={profileImg} alt='Headshot' />
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
					find me outdoors shredding the gnar or hanging with the fam. Feel free to check out my
					work.
				</p>
				<SecondaryBtn text={'go to portfolio'} />
			</div>
		</AboutMeStyled>
	)
}

export default AboutMe
