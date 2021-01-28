import { useState } from 'react'
import Home from './Home'
import PortfolioItem from './Portfolio/PortfolioItem'
import { Footer, Header } from './shared'
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
			<Home />
			<Footer />
			<PortfolioItem />
		</div>
	)
}

export default App
