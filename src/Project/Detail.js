import { SecondaryBtn } from '../shared/SecondaryBtn'
import { ProjectStyled } from '../Styled/ProjectStyled'
import managePreviewSml from '../data/images/detail/mobile/image-manage-preview-1-mobile.jpg'
import managePreview1Med from '../data/images/detail/tablet/image-manage-preview-1-tablet.jpg'
import managePreview1Lrg from '../data/images/detail/desktop/image-manage-preview-1-desktop.jpg'
import managePreview2Sml from '../data/images/detail/mobile/image-manage-preview-2-mobile.jpg'
import managePreview2Med from '../data/images/detail/tablet/image-manage-preview-2-tablet.jpg'
import managePreview2Lrg from '../data/images/detail/desktop/image-manage-preview-2-desktop.jpg'
import ProjectNav from './ProjectNav'
import { tablet, desktop } from '../shared/MediaQueries'
import manageSml from '../data/images/detail/mobile/image-manage-hero-mobile.jpg'
import manageMed from '../data/images/detail/tablet/image-manage-hero-tablet.jpg'
import manageLrg from '../data/images/detail/desktop/image-manage-hero-desktop.jpg'

const Project = () => {
	return (
		<ProjectStyled>
			<div className='project-hero'>
				<picture>
					<source srcset={manageLrg} media={desktop} />
					<source srcset={manageMed} media={tablet} />
					<img src={manageSml} alt='manage screenshot' />
				</picture>
			</div>
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
						<p>Interaction Design / Front End Development</p>
						<p>HTML / CSS / JS</p>
					</div>
					<SecondaryBtn text='visit website' />
				</aside>
				<section className='project-background'>
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
					<div className='project-preview'>
						<h3>Project Preview</h3>
						<picture>
							<source
								srcset={managePreview1Lrg}
								media={desktop}
							/>
							<source srcset={managePreview1Med} media={tablet} />
							<img
								src={managePreviewSml}
								alt='manage screenshot'
							/>
						</picture>
						<picture>
							<source
								srcset={managePreview2Lrg}
								media={desktop}
							/>
							<source srcset={managePreview2Med} media={tablet} />
							<img
								src={managePreview2Sml}
								alt='manage screenshot two'
							/>
						</picture>
					</div>
				</section>
			</article>
			<ProjectNav />
		</ProjectStyled>
	)
}

export default Project
