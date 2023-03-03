import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props

  return (
    <Link to={`/team-matches/${eachTeam.id}`}>
      <li>
        <img src={eachTeam.teamImageUrl} alt={eachTeam.name} />
        <p>{eachTeam.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
