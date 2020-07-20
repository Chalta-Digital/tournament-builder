const { Pool } = require('pg');
const pgPool = new Pool ({
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    user: 'api',
    password: 'api',
	database: 'db_tournament',
	max: 1,
	connectionTimeoutMillis: 0,
	idleTimeoutMillis: 0
});
/** table creation queries */

const createRoleEnumText = `
	DROP TYPE IF EXISTS role CASCADE;
	CREATE TYPE role AS ENUM ('appAdmin', 'tournamentAdmin', 'referee');
	`;
const createUserTableText = 
	`CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		username VARCHAR (50) UNIQUE NOT NULL,
		password  TEXT  NOT NULL,
		user_role role DEFAULT NULL
	);
	`;
const createTournamentTableText = 
	`CREATE TABLE IF NOT EXISTS tournaments (
		id SERIAL PRIMARY KEY,
		user_id INTEGER REFERENCES users(id),
		tournament_name TEXT NOT NULL,
		no_of_teams INTEGER NOT NULL,
		sports_type TEXT NOT NULL,
		tournament_type TEXT NOT NULL,
		no_of_groups INTEGER NOT NULL,
		no_of_stages INTEGER NOT NULL,
		start_date DATE NOT NULL DEFAULT CURRENT_DATE,
		end_date DATE CHECK (end_date > start_date)	
	);
	`;
const createTeamsText = 
	`CREATE TABLE IF NOT EXISTS teams (
		id SERIAL PRIMARY KEY,
		team_name TEXT NOT NULL
	);
	`;

pgPool.query(createRoleEnumText, (err, res) => {
	if (err) console.log(err);
})

pgPool.query(createUserTableText, (err, res) => {
	console.log('creating user')
	if (err) console.log(err);
})
pgPool.query(createTournamentTableText, (err, res) => {
	if (err) console.log(err);	
	console.log('creating tourn')
})
pgPool.query(createTeamsText, (err, res) => {
	if (err) console.log(err);

})


const createGroupsText = 
`CREATE TABLE IF NOT EXISTS groups (
	id SERIAL PRIMARY KEY,
	group_name TEXT NOT NULL,
	tournament_id INTEGER REFERENCES tournaments(id),
	teams INTEGER[]
);
`;
pgPool.query(createGroupsText, (err, res) => {
	console.log(err, res)
});

const createTeamTournamentText = 
`CREATE TABLE IF NOT EXISTS team_tournament (
	id SERIAL PRIMARY KEY,
	team_id INTEGER REFERENCES teams(id),
	tournament_id INTEGER REFERENCES tournaments(id)
);
`;
pgPool.query(createTeamTournamentText, (err, res) => {
	console.log(err, res)
});

const createGamesText = 
`CREATE TABLE IF NOT EXISTS games (
	id SERIAL PRIMARY KEY,
	group_id INTEGER REFERENCES groups(id),
	tournament_id INTEGER REFERENCES tournaments(id),
	team_id_1 INTEGER NOT NULL,
	team_id_2 INTEGER NOT NULL
);
`;
pgPool.query(createGamesText, (err, res) => {
	console.log(err, res)
});

const createResultsText = 
`CREATE TABLE IF NOT EXISTS results (
	id SERIAL PRIMARY KEY,
	game_id INTEGER REFERENCES games(id),
	team_id_1_score INTEGER NOT NULL,
	team_id_2_score INTEGER NOT NULL
);
`;
pgPool.query(createResultsText, (err, res) => {
	console.log(err, res)
});


/** 
 dummy data generation for users table 
*/
const generateUsersTableDataText = 
`
INSERT INTO users(username, password, user_role)
SELECT
'user_' || seq AS username,
'chalta2020' AS password,
(
	CASE (RANDOM()*2)::INT
	WHEN 0 THEN 'appAdmin'::role
	WHEN 1 THEN 'tournamentAdmin'::role
	WHEN 2 THEN 'referee'::role
	END
) AS user_role
FROM GENERATE_SERIES(1, 5) seq;
`;

pgPool.query(generateUsersTableDataText, (err, res) => {
	console.log(err, res)
});

pgPool.end();




