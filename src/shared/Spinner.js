import SpinnerStyled from '../Styled/SpinnerStyled'

const Spinner = () => {
	return (
		<SpinnerStyled>
			<div class='ring'>
				Loading
				<span></span>
			</div>
		</SpinnerStyled>
	)
}

export default Spinner
