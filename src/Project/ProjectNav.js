import { ProjectNavStyled } from '../Styled/ProjectStyled'

const ProjectNav = () => {
	return (
		<ProjectNavStyled>
			<div>
				<h4>Fylo</h4>
				<p>previous project</p>
			</div>
			<div>
				<h4>Bookmark</h4>
				<p>next project</p>
			</div>
		</ProjectNavStyled>
	)
}

export default ProjectNav;
