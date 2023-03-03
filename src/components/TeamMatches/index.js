import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, MatchesData: []}

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id, id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const recentMatchesDetails = data.recent_matches.map(each => ({
      competingTeamLogo: each.competing_team_logo,
      competingTeam: each.competing_team,
      result: each.result,
      matchStatus: each.match_status,
      id: each.id,
    }))

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        firstInnings: data.latest_match_details.first_innings,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        umpires: data.latest_match_details.umpires,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        competingTeam: data.latest_match_details.competing_team,
      },
      recentMatches: recentMatchesDetails,
    }

    console.log(recentMatchesDetails[0].competingTeam)
    console.log(formattedData.recentMatches)
    this.setState({MatchesData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, MatchesData} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader
            testid="loader"
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
          />
        ) : (
          <div>
            <img
              className="teamBannerProp"
              src={MatchesData.teamBannerUrl}
              alt="team banner"
            />
            <LatestMatch latestMatchDetails={MatchesData.latestMatchDetails} />
            <ul className="matchCardUlList">
              {MatchesData.recentMatches.map(eachMatch => (
                <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
