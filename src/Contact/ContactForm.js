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
				nameErr: '',
				emailErr: '',
				messageErr: '',
			})
		}
	}

	//validation function here
	const formValidation = () => {
		let formErrors = {}
		let isValid = true
		//name validation
		if (!values.name) {
			formErrors.nameErr = 'You must enter a name'
			isValid = false
		} else if (values.name.length < 2) {
			formErrors.nameErr = 'Name must contain at least two characters'
			isValid = false
		} else if(values.name.length > 50) {
			formErrors.nameErr = 'Name must contain less than  50 characters'
			isValid = false
		}
		//email validation

		//message validation
		
		setErrors(formErrors)
		setSubmitted(false)
		return isValid
	}

	return (
		<ContactFormStyled>
			<h2>Contact Me</h2>
			<form name='contact' method='post' onSubmit={handleSubmit}>
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
						placeholder='Jane Appleseed'
						value={values.name}
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
						value={values.email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='message'>Message</label>
					<textarea
						id='message'
						name='message'
						placeholder='How can I help?'
						value={values.message}
						onChange={handleChange}
					></textarea>
					{submitted && (
						<div className='form-submit'>Form Submitted</div>
					)}
				</div>
				<EmailBtn text={'send message'} type='submit' />
			</form>
		</ContactFormStyled>
	)
}

export default ContactForm
