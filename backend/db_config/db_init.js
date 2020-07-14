const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    user: 'api',
    password: 'api',
    database: 'db_tournament'
});

if(pgclient.connect()){
	
	const createRoleEnumText = `
	DROP TYPE IF EXISTS role CASCADE;
	CREATE TYPE role AS ENUM (\'appAdmin\', \'tournamentAdmin\', \'referee\');
	`
    pgclient.query(createRoleEnumText, (err, res) => {
        if (err) throw err;
    });

    const createUserTableText  = 
		`CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			username VARCHAR (50) UNIQUE NOT NULL,
			password  TEXT  NOT NULL,
			user_role role DEFAULT NULL
		);
		`;
    pgclient.query(createUserTableText, (err, res) => {
        if (err) throw err;
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
		`;
    pgclient.query(createTournamentTableText, (err, res) => {
        if (err) throw err;
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
	`;
    pgclient.query(createTournamentTableText, (err, res) => {
        if (err) throw err;
    });

    const createTeamsText = 
	`CREATE TABLE IF NOT EXISTS teams (
		id SERIAL PRIMARY KEY,
		team_name TEXT NOT NULL
	);
	`;
    pgclient.query(createTeamsText, (err, res) => {
        if (err) throw err;
    });

    const createGroupsText = 
	`CREATE TABLE IF NOT EXISTS groups (
		id SERIAL PRIMARY KEY,
		group_name TEXT NOT NULL,
		tournament_id INTEGER REFERENCES tournaments(id),
		teams INTEGER[]
	);
	`;
    pgclient.query(createGroupsText, (err, res) => {
        if (err) throw err;
    });

    const createTeamTournamentText = 
	`CREATE TABLE IF NOT EXISTS team_tournament (
		id SERIAL PRIMARY KEY,
		team_id INTEGER REFERENCES teams(id),
		tournament_id INTEGER REFERENCES tournaments(id)
	);
	`;
    pgclient.query(createTeamTournamentText, (err, res) => {
        if (err) throw err;
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
    pgclient.query(createGamesText, (err, res) => {
        if (err) throw err;
    });

    const createResultsText = 
	`CREATE TABLE IF NOT EXISTS results (
		id SERIAL PRIMARY KEY,
		game_id INTEGER REFERENCES games(id),
		team_id_1_score INTEGER NOT NULL,
		team_id_2_score INTEGER NOT NULL
	);
	`;
    pgclient.query(createResultsText, (err, res) => {
        if (err) throw err;
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

    pgclient.query(generateUsersTableDataText, (err, res) => {
        if (err) throw err;
    });


}else(
    console.log('Problem with DB connection')
);



