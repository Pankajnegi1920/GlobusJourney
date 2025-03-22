import { Sequelize } from 'sequelize';

console.log('🔍 DBConnect.js is executing...'); // Debug log

console.log(process.env.DB_HOST)

const sequelize = new Sequelize({
	dialect: 'mysql',
	dialectModule: require('mysql2'),
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT || 3306,
	logging: console.log,
});

import Leads from './src/models/Leads';

sequelize.authenticate()
	.then(() => console.log('✅ Database connected successfully!'))
	.catch(err => console.error('❌ Database connection failed:', err));

export default sequelize;