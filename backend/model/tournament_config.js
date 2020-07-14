
class TournamentConfig{

constructor (json){

}

id = 0
tournamentType = String
numberOfGroups = 0
numberOfStages = 0
}

const tournamentType = {
    1: 'Group torunaments',
    2: 'Single elimination tournament',
    3: 'Double elimination tournament'

}

module.exports = {
    TournamentConfig
}