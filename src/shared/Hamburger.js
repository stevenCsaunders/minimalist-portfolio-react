import { HamburgerStyled } from '../Styled/HamburgerStyled'

const Hamburger = ( { onClick, toggle } ) => {
	return (
		<HamburgerStyled>
			<button type='button' className={!toggle ? 'hamburger hamburger--squeeze' : 'hamburger hamburger--squeeze is-active'} onClick={onClick}>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button>
		</HamburgerStyled>
	)
}

export default Hamburger
