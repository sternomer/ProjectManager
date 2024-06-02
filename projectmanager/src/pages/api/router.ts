import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../config/.env') });

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'mydb',
  port: Number(process.env.DB_PORT) || 3306,
};

console.log('Environment Variables in router.js:', process.env);
console.log('Database configuration in router.js:', dbConfig);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { projectType, projectName, budget, description, percentage, dates, displayName } = req.body;

    try {
      console.log('Connecting to the database...');
      const connection = await mysql.createConnection(dbConfig);
      console.log('Database connection established');

      const query = 'INSERT INTO projects (projectType, projectName, budget, description, percentage, dates, displayName) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const [result] = await connection.execute(query, [projectType, projectName, budget, description, percentage, JSON.stringify(dates), displayName]);
      console.log('Data inserted successfully', result);
      
      res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Failed to save form data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
