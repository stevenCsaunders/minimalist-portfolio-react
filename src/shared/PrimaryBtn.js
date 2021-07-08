import { PrimaryBtnStyled } from '../Styled/PrimaryBtnStyled'

const PrimaryBtn = () => {
	return (
		<PrimaryBtnStyled>
			<div className='arrow'>
				<svg
					role='img'
					aria-labelledby='primary-button-img'
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='14'
				>
					<title id='primary-button-img'>
						Primary Button Down Arrow Image
					</title>
					<g fill='none' fillRule='evenodd' stroke='#5FB4A2'>
						<path d='M0 9l8 4 8-4' />
						<path opacity='.5' d='M0 5l8 4 8-4' />
						<path opacity='.25' d='M0 1l8 4 8-4' />
					</g>
				</svg>
			</div>
			<div className='about-me'>
				<span>About Me</span>
			</div>
		</PrimaryBtnStyled>
	)
}

export default PrimaryBtn
