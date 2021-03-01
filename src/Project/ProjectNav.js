import { ProjectNavStyled } from '../Styled/ProjectStyled'
import { NavLink } from 'react-router-dom'
import LeftArrow from '../data/images/icons/arrow-left.svg'
import RightArrow from '../data/images/icons/arrow-right.svg'

const ProjectNav = () => {
	return (
		<ProjectNavStyled>
			<div className='previous'>
				<NavLink className="previous-arrow" to='/'>
					<img src={LeftArrow} alt='next project arrow' />
					<div>
						<h4>Fylo</h4>
						<p>Previous Project</p>
					</div>
				</NavLink>
			</div>
			<div className='next'>
				<NavLink className="next-arrow" to='/'>
					<img src={RightArrow} alt='previous project arrow' />
					<div>
						<h4>Bookmark</h4>
						<p>Next Project</p>
					</div>
				</NavLink>
			</div>
		</ProjectNavStyled>
	)
}

export default ProjectNav
