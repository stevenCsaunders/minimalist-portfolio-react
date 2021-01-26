import HomeHero from './HomeHero';
import { HomeMainStyled } from '../Styled/HomeMainStyled'

export const HomeMain = () => {
  return (
    <HomeMainStyled>
      <HomeHero />
    </HomeMainStyled>
  )
}

export default HomeMain;