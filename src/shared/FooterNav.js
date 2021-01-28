import { FooterNavStyled } from '../Styled/FooterStyled'

const FooterNav = () => {
	return (
		<FooterNavStyled>
			<a href='/' aria-label='Footer Logo'>
				<svg
					role='img'
					aria-labelledby='footer-logo'
					xmlns='http://www.w3.org/2000/svg'
					width='61'
					height='32'
				>
					<title id='footer-logo'>Footer Site Logo</title>
					<path
						fill='#33323D'
						fillRule='evenodd'
						d='M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z'
					/>
				</svg>
			</a>
			<ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					{' '}
					<a href='/portfolio'>Portfolio</a>
				</li>
				<li>
					{' '}
					<a href='/contact'>Contact Me</a>
				</li>
			</ul>
		</FooterNavStyled>
	)
}

export default FooterNav
