import mysql from 'mysql';

const dbconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'db_cultupaz'
});

export function getConnection() {
  return dbconnection;
}

export default dbconnection;