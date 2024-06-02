const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../app/config/.env') });
const mysql = require('mysql2/promise');
const config = require('../app/config/config');

let connection;

async function getConnection() {
  if (!connection) {
    try {
      console.log('Connecting to the database...');
      console.log('Database configuration:', config.db);
      connection = await mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
        port: config.db.port,
      });
      console.log('Database connection established');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }
  return connection;
}

module.exports = {
  getConnection,
};
