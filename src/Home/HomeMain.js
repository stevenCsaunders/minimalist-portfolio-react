import HomeHero from './HomeHero';
import AboutMe from './AboutMe'
import { HomeMainStyled } from '../Styled/HomeMainStyled'

export const HomeMain = () => {
  return (
    <HomeMainStyled>
      <HomeHero />
      <AboutMe />
    </HomeMainStyled>
  )
}

export default HomeMain;