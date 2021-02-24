import { ContactUsStyled }from '../Styled/ContactUsStyled'
import ContactForm from './ContactForm'
import github from '../data/images/icons/github.svg'
import twitter from '../data/images/icons/twitter.svg'
import linkedin from '../data/images/icons/linkedin.svg'


export const ContactUs = () => {
	return (
		<article>
			<ContactUsStyled>
				<h2>Get in Touch</h2>
				<p>
					I’d love to hear about what you’re working on and how I can
					help. I’m currently looking for a new role and am open to a
					wide range of opportunities. My preference would be to find
					a position in a company in London. But I’m also happy to
					hear about opportunites that don’t fit that description. I’m
					a hard-working and positive person who will always approach
					each task with a sense of purpose and attention to detail.
					Please do feel free to check out my online profiles below
					and get in touch using the form.
				</p>
				<ul className='social-nav '>
					<li>
						<img src={github} alt='github' />
					</li>
					<li>
						<img src={twitter} alt='twitter' />
					</li>
					<li>
						<img src={linkedin} alt='linkedin' />
					</li>
				</ul>
			</ContactUsStyled>
			<ContactForm />
		</article>
	)
}

export default ContactUs
