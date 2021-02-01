import { useState } from 'react'
import Home from './Home'
import Portfolio from './Portfolio'
import Project from './Project'
import { Footer, Header, WorkWith } from './shared'
import { GlobalStyled, NormalizeStyled } from './Styled/GlobalStyled'
import { MainStyled } from './Styled/MainStyled'


function App() {
	const [hamburgerState, setHamburgerState] = useState(false)
	const hamburgerHandler = () =>
		!hamburgerState ? setHamburgerState(true) : setHamburgerState(false)

	return (
		<div className='App'>
			<NormalizeStyled />
			<GlobalStyled />
			<Header onClick={hamburgerHandler} toggle={hamburgerState} />
			<MainStyled>
				<Project />
				{/* <Portfolio /> */}
				{/* <Home /> */}
				<WorkWith />
			</MainStyled>
			<Footer />
		</div>
	)
}

export default App
