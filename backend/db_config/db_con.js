const { Pool } = require('pg');
var pgPoolClient = new Pool ({
    host: process.env.POSTGRES_HOST || 'host.docker.internal',
    port: process.env.POSTGRES_PORT || 5432,
    user: 'api',
    password: 'api',
    database: 'db_tournament',
    max: 1,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0
});

module.exports = {
    pgPoolClient
};