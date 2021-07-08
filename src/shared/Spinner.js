import SpinnerStyled from '../Styled/SpinnerStyled'

const Spinner = () => {
	return (
		<SpinnerStyled>
			<div className='ring'>
				Loading...
				<div className="loader"></div>
			</div>
		</SpinnerStyled>
	)
}

export default Spinner
