import { SecondaryBtn } from './SecondaryBtn'
import { WorkWithStyled } from '../Styled/WorkWithStyled'
import { Link } from 'react-router-dom'

const WorkWith = () => {
	return (
		<WorkWithStyled>
			<h3>Interested in doing a project together?</h3>
			<span className='horizontal-line'></span>
			<Link to='/contact'><SecondaryBtn text='contact me' /></Link>
		</WorkWithStyled>
	)
}

export default WorkWith
