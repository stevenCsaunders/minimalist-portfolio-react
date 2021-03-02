import { SecondaryBtn } from './SecondaryBtn'
import { WorkWithStyled } from '../Styled/WorkWithStyled'

const WorkWith = () => {
	return (
		<WorkWithStyled>
			<h3>Interested in doing a project together?</h3>
			<span className='horizontal-line'></span>
			<SecondaryBtn text='contact me' />
		</WorkWithStyled>
	)
}

export default WorkWith
