import { ContactUsStyled } from '../Styled/ContactUsStyled'
import { useEffect, useState } from 'react'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import ContactForm from './ContactForm'
import SocialIcons from '../shared/SocialIcons'
import Spinner from '../shared/Spinner'

export const ContactUs = () => {
	const [contactData, setContactData] = useState(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`
			*[_id == "singleton-contact"] {
				_id,
				title,
				contactIntro
			}
		`
			)
			.then((data) => setContactData(data[0]))
			.catch(console.error)
	}, [])

	if (!contactData) return <Spinner/>

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
					<SocialIcons />
				</div>
			</ContactUsStyled>
			<ContactForm />
		</article>
	)
}

export default ContactUs
