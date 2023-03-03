import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  return (
    <div className="totalLatestMatch">
      <h1>Latest Matches</h1>
      <div>
        <p>{latestMatchDetails.competingTeam}</p>
        <p>{latestMatchDetails.date}</p>
        <p>{latestMatchDetails.venue}</p>
        <p>{latestMatchDetails.result}</p>
      </div>
      <img
        src={latestMatchDetails.competingTeamLogo}
        alt={`latest match ${latestMatchDetails.competingTeam}`}
      />
      <hr />
      <div>
        <h1>first Innings</h1>
        <p>{latestMatchDetails.firstInnings}</p>
        <h1>second Innings</h1>
        <p>{latestMatchDetails.secondInnings}</p>
        <h1>manOfTheMatch</h1>
        <p>{latestMatchDetails.manOfTheMatch}</p>
        <h1>umpires</h1>
        <p>{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
