import { SecondaryBtnStyled, SecondaryBtnDarkStyled } from '../Styled/SecondaryBtnStyled'

export const SecondaryBtn = ({ text }) => {

	return (
		<SecondaryBtnStyled>
			{text}
		</SecondaryBtnStyled>
	)
}

export const SecondaryButtonDark = ({ text }) => {

		return (
			<SecondaryBtnDarkStyled>
				{text}
			</SecondaryBtnDarkStyled>
		)
};
