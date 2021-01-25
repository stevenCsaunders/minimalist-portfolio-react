import { useState } from 'react'
import Header from './shared/Header'
import { GlobalStyled, NormalizeStyled } from './Styled/GlobalStyled'

function App() {
	const [hamburgerState, setHamburgerState] = useState(false)
	const hamburgerHandler = () =>
		!hamburgerState ? setHamburgerState(true) : setHamburgerState(false)

	return (
		<div className='App'>
			<NormalizeStyled />
			<GlobalStyled />
			<Header onClick={hamburgerHandler} toggle={hamburgerState} />
		</div>
	)
}

export default App;
