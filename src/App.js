import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio'
import Project from './Project'
import Contact from './Contact'
import { Footer, Header } from './shared'
import { GlobalStyled, NormalizeStyled } from './Styled/GlobalStyled'
import { MainStyled } from './Styled/MainStyled'

function App() {
	const [hamburgerState, setHamburgerState] = useState(false)
	const hamburgerHandler = () =>
		!hamburgerState ? setHamburgerState(true) : setHamburgerState(false)

	return (
		<BrowserRouter>
			<div className='App'>
				<NormalizeStyled />
				<GlobalStyled />
				<Header onClick={hamburgerHandler} toggle={hamburgerState} />
				<MainStyled>
					<Switch>
						<Route component={Home} exact path='/' />
						<Route component={Project} path='/portfolio/:slug' />
						<Route component={Portfolio} path='/portfolio' />
						<Route component={Contact} path='/contact' />
					</Switch>
				</MainStyled>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
