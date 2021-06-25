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

	const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

	const handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...values })
		})
			.then(() => alert("Success!"))
			.catch(error => alert(error));

		e.preventDefault();
		setSubmitted(true);
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.id]: e.target.value })
	}

	return (
		<ContactFormStyled>
			<h2>Contact Me</h2>
			<form onSubmit={handleSubmit} netlify-honeypot="bot-field" data-netlify='true' name='contact' >
			<input type="hidden" name="bot-field"/>
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
				<div data-netlify-recaptcha="true"></div>
				<EmailBtn text={'send message'} type='submit' />
			</form>
		</ContactFormStyled>
	)
}

export default ContactForm
