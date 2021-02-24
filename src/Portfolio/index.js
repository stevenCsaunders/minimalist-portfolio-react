import { useEffect } from 'react'
import { WorkWith } from '../shared'
import PortfolioItem from './PortfolioItem'

export const Portfolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<PortfolioItem />
			<WorkWith />
		</>
	)
}

export default Portfolio
