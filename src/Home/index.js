import { useState, useEffect } from 'react'
import HomeHero from './HomeHero'
import AboutMe from './AboutMe'
import { WorkWith } from '../shared'
import sanityClient from '../client'
import Spinner from '../shared/Spinner'

export const Home = () => {
	const [homeContent, setHomeContent] = useState(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`
				*[_id == "singleton-home"] {
					_id,
					heroContent,
					heroImage{
						alt,
						asset-> {
							_id,
							url
						}
					},
					aboutContent,
					aboutImage {
						alt,
						asset-> {
							_id,
							url
							}
						}
					}
			`
			)
			.then((data) => setHomeContent(data[0]))
			.catch(console.error)
	}, [])

	if (!homeContent) return <Spinner/>

	return (
		<>
			<HomeHero homeContent={homeContent} />
			<AboutMe aboutContent={homeContent} />
			<WorkWith />
		</>
	)
}

export default Home
