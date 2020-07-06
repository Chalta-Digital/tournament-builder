

class User {

constructor(json) {

}

id = 0
email = String
password = String
role = ROLE

}

const ROLE = {
    1: 'Admin',
    2: 'TournamentAdmin',
    3: 'Referee'
}

module.exports = {
    User,
    ROLE
}