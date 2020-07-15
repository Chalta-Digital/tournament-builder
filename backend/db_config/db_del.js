const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    user: 'api',
    password: 'api',
    database: 'db_tournament'
});

if(pgclient.connect()){
    console.log('connected');
    const deleteTablesText = `
    DROP TYPE IF EXISTS role CASCADE;
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS tournaments CASCADE;
    DROP TABLE IF EXISTS tournament_config CASCADE;
    DROP TABLE IF EXISTS team_tournament CASCADE;
    DROP TABLE IF EXISTS teams CASCADE;
    DROP TABLE IF EXISTS games CASCADE;
    DROP TABLE IF EXISTS groups CASCADE;
    DROP TABLE IF EXISTS results CASCADE;
    `;
    
    pgclient.query(deleteTablesText, (err, res) => {
        if (err) throw err;
    });


}else(
    console.log('Problem with DB connection')
);



