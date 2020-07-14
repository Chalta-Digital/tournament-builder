const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST || ,
    port: process.env.POSTGRES_PORT || 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

if(pgclient.connect()){
	
	const createRoleEnumText = `CREATE TYPE role AS ENUM ('appAdmin', 'tournamentAdmin', 'referee');`
	pgclient.query(createEnumText, (err, res) => {
		if (err) throw err
	});

	
	const createUserTableText  = 
		`CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			username VARCHAR (50) UNIQUE NOT NULL,
			password  TEXT  NOT NULL,
			user_role  role
		);
		`
	pgclient.query(createUserTableText, (err, res) => {
		if (err) throw err
	});
	
	const createTournamentTableText = 
		`CREATE TABLE IF NOT EXISTS tournaments (
			id SERIAL PRIMARY KEY,
			user_id INTEGER REFERENCES users(id),
			tournament_name TEXT NOT NULL,
			no_of_teams INTEGER NOT NULL,
			sports_type TEXT NOT NULL,
			start_date DATE NOT NULL DEFAULT CURRENT_DATE,
			end_date DATE CHECK (end_date > start_date)	
		);
		`
	pgclient.query(createTournamentTableText, (err, res) => {
		if (err) throw err
	});
		
	const createTournamentConfigTableText = 
	`CREATE TABLE IF NOT EXISTS tournament_config (
		id SERIAL PRIMARY KEY,
		tournament_id INTEGER REFERENCES tournaments(id),
		tournament_name TEXT NOT NULL,
		no_of_teams INTEGER NOT NULL,
		sports_type TEXT NOT NULL,
		start_date DATE NOT NULL DEFAULT CURRENT_DATE,
		end_date DATE CHECK (end_date > start_date)	
	);
	`
	pgclient.query(createTournamentTableText, (err, res) => {
		if (err) throw err
	});

	const createTeamsText = 
	`CREATE TABLE IF NOT EXISTS teams (
		id SERIAL PRIMARY KEY,
		team_name TEXT NOT NULL
	);
	`
	pgclient.query(createTeamsText, (err, res) => {
		if (err) throw err
	});

	const createGroupsText = 
	`CREATE TABLE IF NOT EXISTS groups (
		id SERIAL PRIMARY KEY,
		group_name TEXT NOT NULL,
		tournament_id INTEGER REFERENCES tournaments(id),
		teams INTEGER[]
	);
	`
	pgclient.query(createGroupsText, (err, res) => {
		if (err) throw err
	});

	const createTeamTournamentText = 
	`CREATE TABLE IF NOT EXISTS team_tournament (
		id SERIAL PRIMARY KEY,
		team_id INTEGER REFERENCES teams(id),
		tournament_id INTEGER REFERENCES tournaments(id)
	);
	`
	pgclient.query(createTeamTournamentText, (err, res) => {
		if (err) throw err
	});

	


}else(
	console.log('Problem with DB connection')
)



