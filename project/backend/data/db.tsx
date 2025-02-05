import mysql from 'mysql2';
import config from '../config';

const pool = mysql.createPool({
    host: config.dbConfig.host,
    user: config.dbConfig.user,
    password: config.dbConfig.password,
    database: config.dbConfig.database,
    connectionLimit: 10
});

module.exports = pool.promise();
