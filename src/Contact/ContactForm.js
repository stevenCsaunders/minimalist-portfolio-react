import { useState } from 'react'
import { EmailBtn } from '../shared/SecondaryBtn'
import { ContactFormStyled } from '../Styled/ContactUsStyled'

const ContactForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [errors, setErrors] = useState({
		nameErr: '',
		emailErr: '',
		messageErr: '',
	})

	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const isValid = formValidation()
		if (isValid) {
			setSubmitted(true)
			setValues({
				name: '',
				email: '',
				message: '',
			})
			setErrors({
				nameErr: null,
				emailErr: null,
				messageErr: null,
			})
		}
	}

	//validation function here
	function formValidation() {
		const emailRegExp =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

		const { name, email, message } = values
		let formErrors = {}
		let isValid = true
		//name validation
		if (!name) {
			formErrors.nameErr = 'You must enter a name'
			isValid = false
		} else if (name.trim().length < 2) {
			formErrors.nameErr = 'Name must contain at least two characters'
			isValid = false
		} else if (name.trim().length > 50) {
			formErrors.nameErr = 'Name must contain less than  50 characters'
			isValid = false
		}
		//email validation
		if (!email) {
			formErrors.emailErr = 'You must enter an email address'
			isValid = false
		} else if (!emailRegExp.test(email)) {
			formErrors.emailErr = 'You must enter a valid email address'
			isValid = false
		}
		//message validation
		if (!message) {
			formErrors.messageErr = 'You must enter a message'
			isValid = false
		} else if (message.trim().length < 2) {
			formErrors.messageErr =
				'Message must contain at least two characters'
			isValid = false
		}

		setErrors(formErrors)
		setSubmitted(false)
		return isValid
	}

	return (
		<ContactFormStyled>
			<h2>Contact Me</h2>
			<form
				name='contact'
				method='post'
				noValidate
				onSubmit={handleSubmit}
			>
				<input type='hidden' name='form-name' value='contact' />
				<div>
					<label htmlFor='name'>
						Name
						{errors.nameErr && (
							<span className='error-text'>{` - ${errors.nameErr}`}</span>
						)}
					</label>
					<input
						id='name'
						name='name'
						type='text'
						minLength='2'
						maxLength='50'
						required
						placeholder='Jane Appleseed'
						value={values.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>
						Email
						{errors.emailErr && (
							<span className='error-text'>{` - ${errors.emailErr}`}</span>
						)}
					</label>
					<input
						id='email'
						name='email'
						type='email'
						required
						placeholder='email@example.com'
						value={values.email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='message'>
						Message
						{errors.messageErr && (
							<span className='error-text'>{` - ${errors.messageErr}`}</span>
						)}
					</label>
					<textarea
						id='message'
						name='message'
						type='text'
						minLength='3'
						maxLength='500'
						required
						placeholder='How can I help?'
						value={values.message}
						onChange={handleChange}
					></textarea>
				</div>
				<div className='form-submit'>
					<EmailBtn text={'send message'} type='submit' />
					{submitted && <span className='submit-success'>Form Submitted</span>}
				</div>
			</form>
		</ContactFormStyled>
	)
}

export default ContactForm
