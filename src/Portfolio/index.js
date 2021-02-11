import { useEffect } from 'react'
import PortfolioItem from './PortfolioItem'

export const Portfolio = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <PortfolioItem />
}

export default Portfolio
