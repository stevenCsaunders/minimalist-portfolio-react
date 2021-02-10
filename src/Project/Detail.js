import SecondaryBtn from '../shared/SecondaryBtn'
import { ProjectStyled } from '../Styled/ProjectStyled'
import manageHero from '../data/images/detail/mobile/image-manage-hero.jpg'
import managePreview1 from '../data/images/detail/mobile/image-manage-preview-1.jpg'
import managePreview2 from '../data/images/detail/mobile/image-manage-preview-2.jpg'
import ProjectNav from './ProjectNav'

const Project = () => {
	return (
		<ProjectStyled>
			<img className='project-hero' src={manageHero} alt='manage hero' />
			<article>
				<aside>
					<h2>Manage</h2>
					<p>
						This project required me to build a fully responsive
						landing page to the designs provided. I used HTML5,
						along with CSS Grid and JavaScript for the areas that
						required interactivity, such as the testimonial slider.
					</p>
					<div className='tech'>
						<p>
							Interaction Design / Front End Development
						</p>
						<p>HTML / CSS / JS</p>
					</div>
					<SecondaryBtn text='visit website' />
				</aside>
				<section>
					<h3>Project Background</h3>
					<p>
						This project was a front-end challenge from Frontend
						Mentor. It’s a platform that enables you to practice
						building websites to a design and project brief. Each
						challenge includes mobile and desktop designs to show
						how the website should look at different screen sizes.
						Creating these projects has helped me refine my workflow
						and solve real-world coding problems. I’ve learned
						something new with each project, helping me to improve
						and adapt my style.
					</p>
					<div className="project-preview">
						<h3>Project Preview</h3>
						<img src={managePreview1} alt='manage preview 1' />
						<img src={managePreview2} alt='manage preview 2' />
					</div>
				</section>
			</article>
			<ProjectNav />
		</ProjectStyled>
	)
}

export default Project
