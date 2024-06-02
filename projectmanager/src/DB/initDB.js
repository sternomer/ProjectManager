const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') });

const mysql = require('mysql2/promise');
const config = require('../config/config');

global.dbConfig = {
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port,
};

async function initDB() {
  try {
    const connection = await mysql.createConnection(global.dbConfig);

    await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db.database}`);
    await connection.query(`USE ${config.db.database}`);
    await connection.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        projectType VARCHAR(255),
        projectName VARCHAR(255),
        budget VARCHAR(255),
        description TEXT,
        percentage INT,
        dates JSON,
        displayName VARCHAR(255)
      )
    `);
    console.log('Database and table created successfully');
    await connection.end();
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initDB();
