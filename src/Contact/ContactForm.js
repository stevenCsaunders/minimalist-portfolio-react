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

	const handleSubmit = e => {
		e.preventDefault();
		setSubmitted(true);
		setValues({
			name: '',
			email: '',
			message: '',
		})
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.id]: e.target.value })
	}

	return (
		<ContactFormStyled>
			<h2>Contact Me</h2>
			<form name='contact' method='post'>
			<input type="hidden" name="form-name" value="contact" />
				<div>
					<label htmlFor='name'>
						Name
						<input
							id='name'
							name='name'
							type='text'
							placeholder='Jane Appleseed'
							value={values.name}
							required
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='email'>
						Email
						<input
							id='email'
							name='email'
							type='email'
							placeholder='email@example.com'
							value={values.email}
							required
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='message'>
						Message
						<textarea
							id='message'
							name='message'
							placeholder='How can I help?'
							value={values.message}
							required
							onChange={handleChange}
						></textarea>
					</label>
					{submitted ? <div className='form-submit'>Form Submitted</div> : ''}
				</div>
				<EmailBtn text={'send message'} type='submit' onClick={handleSubmit}
				/>
			</form>
		</ContactFormStyled>
	)
}

export default ContactForm
