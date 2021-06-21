import SpinnerStyled from '../Styled/SpinnerStyled'

const Spinner = () => {
	return (
		<SpinnerStyled>
			<div class='ring'>
				Loading...
				<div class="loader"></div>
			</div>
		</SpinnerStyled>
	)
}

export default Spinner
