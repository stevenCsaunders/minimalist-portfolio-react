import { SecondaryBtnStyled, SecondaryBtnDarkStyled } from '../Styled/SecondaryBtnStyled'

const handleClick = () => {
	alert('Cliked!')
}
export const SecondaryBtn = ({ text }) => {

	return (
		<SecondaryBtnStyled onClick={handleClick} type='button'>
			{text}
		</SecondaryBtnStyled>
	)
}

export const SecondaryButtonDark = ({ text }) => {


		return (
			<SecondaryBtnDarkStyled onClick={handleClick} type='button'>
				{text}
			</SecondaryBtnDarkStyled>
		)
};
