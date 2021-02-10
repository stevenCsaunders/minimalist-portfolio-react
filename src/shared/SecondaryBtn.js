import { SecondaryBtnStyled } from '../Styled/SecondaryBtnStyled'

const SecondaryBtn = ({ text }) => {
	const handleClick = () => {
		console.log('Cliked!')
	}

	return (
		<SecondaryBtnStyled onClick={handleClick} type='button'>
			{text}
		</SecondaryBtnStyled>
	)
}

export default SecondaryBtn;
