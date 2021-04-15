import { ContactUsStyled } from '../Styled/ContactUsStyled'
import { useEffect, useState } from 'react'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import ContactForm from './ContactForm'

export const ContactUs = () => {
	const [contactData, setContactData] = useState(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`
			*[_id == "singleton-contact"] {
				_id,
				title,
				contactIntro,
				githubIcon {
					asset-> {
						_id,
						url
					},
					alt,
					link
				},
				twitterIcon {
					asset-> {
						_id,
						url
					},
					alt,
					link
				},
				linkedInIcon {
					asset-> {
						_id,
						url
					},
					alt,
					link
				}
			}
		`
			)
			.then((data) => setContactData(data[0]))
			.catch(console.error)
	}, [])

	if (!contactData) return <div>Loading...</div>

	return (
		<article>
			<ContactUsStyled>
				<h2>{contactData.title}</h2>
				<div>
					<BlockContent
						blocks={contactData.contactIntro}
						projectId='7icmm84f'
						dataset='production'
					/>
					<ul className='social-nav '>
						<li>
							<a href={contactData.githubIcon.link} target='_blank' rel='noreferrer'>
								<img
									src={contactData.githubIcon.asset.url}
									alt={contactData.githubIcon.alt}
								/>
							</a>
						</li>
						<li>
							<a href={contactData.twitterIcon.link} target='_blank' rel='noreferrer'>
								<img
									src={contactData.twitterIcon.asset.url}
									alt={contactData.twitterIcon.alt}
								/>
							</a>
						</li>
						<li>
							<a href={contactData.linkedInIcon.link} target='_blank' rel='noreferrer'>
								<img
									src={contactData.linkedInIcon.asset.url}
									alt={contactData.linkedInIcon.alt}
								/>
							</a>
						</li>
					</ul>
				</div>
			</ContactUsStyled>
			<ContactForm />
		</article>
	)
}

export default ContactUs
