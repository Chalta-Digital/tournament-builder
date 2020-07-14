const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST || ,
    port: process.env.POSTGRES_PORT || 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

if(pgclient.connect()){
	
	const createEnumText = `CREATE TYPE role AS ENUM ('appAdmin', 'tournamentAdmin', 'referee');`
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
	
}else(
	console.log('Problem with DB connection');
)



