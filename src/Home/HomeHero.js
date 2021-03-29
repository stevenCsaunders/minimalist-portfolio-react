import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import sanityClient from '../client'
import { HomeHeroStyled } from '../Styled/HomeHeroStyled'
import { PrimaryBtn } from '../shared'


const HomeHero = () => {
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
					},
					aboutContent,
					aboutimage {
						alt,
						asset-> {
							_id,
							url
						}
					}
				}
			}
			`
			)
			.then((data) => setHomeContent(data[0]))
			.catch(console.error)
	}, [])

	if(!homeContent) return <div>Loading...</div>

	return (
		<HomeHeroStyled>
			<img src={homeContent.heroImage.asset.url} alt={homeContent.heroImage.alt} />
			<div className='hero-header'>
				<h1>
					{homeContent.heroContent}
				</h1>
				<PrimaryBtn />
			</div>
		</HomeHeroStyled>
	)
}

export default HomeHero
