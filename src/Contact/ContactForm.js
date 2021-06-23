import { useState } from 'react'
import { EmailBtn } from '../shared/SecondaryBtn'
import { ContactFormStyled } from '../Styled/ContactUsStyled'

const ContactForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
	}

	const handleChange = (e) => {
		setValues({ ...values, [e.target.id]: e.target.value })
	}

	return (
		<ContactFormStyled>
			<h2>Contact Me</h2>
			<form onSubmit={handleSubmit}  action="POST" data-netlify='true'>
				{submitted ? <div>Form Submitted</div> : ''}
				<div>
					<label htmlFor='name'>Name</label>
					<input
						id='name'
						name='name'
						type='text'
						placeholder='Jane Appleseed'
						value={values.name}
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						name='email'
						type='email'
						placeholder='email@example.com'
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='message'>Message</label>
					<textarea
						id='message'
						name='message'
						placeholder='How can I help?'
						required
						onChange={handleChange}
					></textarea>
				<div data-netlify-recaptcha='true'></div>
				</div>
				<EmailBtn text={'send message'} type='submit'/>
			</form>
		</ContactFormStyled>
	)
}

export default ContactForm
