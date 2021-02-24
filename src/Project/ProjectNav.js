import { ProjectNavStyled } from '../Styled/ProjectStyled'
import { NavLink } from 'react-router-dom'
import LeftArrow from '../data/images/icons/arrow-left.svg'
import RightArrow from '../data/images/icons/arrow-right.svg'

const ProjectNav = () => {
	return (
		<ProjectNavStyled>
			<div>
			<NavLink to="/">
			<img src={LeftArrow} alt= 'next project arrow' />
				<h4>Fylo</h4>
				<p>Previous Project</p>
			</NavLink>
			</div>
			<div>
      <NavLink to="/">
      	<img src={RightArrow} alt='previous project arrow' />
					<h4>Bookmark</h4>
					<p>Next Project</p>
      </NavLink>
			</div>
		</ProjectNavStyled>
	)
}

export default ProjectNav;
