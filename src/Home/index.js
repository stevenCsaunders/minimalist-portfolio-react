import HomeHero from './HomeHero'
import AboutMe from './AboutMe'
import WorkWith from '../shared/WorkWith'
import { MainStyled } from '../Styled/HomeMainStyled'

export const Home = () => {
	return (
		<MainStyled>
			<HomeHero />
			<AboutMe />
			<WorkWith />
		</MainStyled>
	)
}

export default Home