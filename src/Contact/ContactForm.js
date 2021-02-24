import { useState } from 'react'
import SecondaryBtn from '../shared/SecondaryBtn'
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
			<form onSubmit={handleSubmit}>
				{submitted ? <div>Form Submitted</div> : ''}
				<div>
					<label for='name'>Name</label>
					<input
						id='name'
						type='text'
						placeholder='Jane Appleseed'
						value={values.name}
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label for='email'>Email</label>
					<input
						id='email'
						type='email'
						placeholder='email@example.com'
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label for='message'>Message</label>
					<textarea
						id='message'
						placeholder='How can I help?'
						required
						onChange={handleChange}
					></textarea>
				</div>
				<SecondaryBtn text={'send message'}/>
			</form>
		</ContactFormStyled>
	)
}

export default ContactForm
