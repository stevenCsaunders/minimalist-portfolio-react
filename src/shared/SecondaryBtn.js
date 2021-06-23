import { SecondaryBtnStyled, SecondaryBtnDarkStyled, EmailBtnStyled } from '../Styled/SecondaryBtnStyled'

export const EmailBtn = ({ text }) => {

	return (
		<EmailBtnStyled>
			{text}
		</EmailBtnStyled>
	)
}

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
