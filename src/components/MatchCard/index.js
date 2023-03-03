import './index.css'

const MatchCard = props => {
  const {eachMatch} = props

  return (
    <li className="matchCardLiList">
      <div>
        <img
          src={eachMatch.competingTeamLogo}
          alt={`competing team ${eachMatch.competingTeam}`}
        />
        <p>{eachMatch.competingTeam}</p>
        <p>{eachMatch.result}</p>
        <p>{eachMatch.matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
