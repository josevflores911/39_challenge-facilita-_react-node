import mysql from 'mysql2';
import { mysqlConfig } from '../config.js'


const pool = mysql.createPool(mysqlConfig).promise();

export async function getClients() {
    //good practice
    const [rows] = await pool.query("select id, name, email, telephone, latitude,longitud from clients");
    console.log(rows);
    // const [rows] = await pool.query("select * from clients");
    return rows
}

export async function getMapClients() {
    const [rows] = await pool.query("select id, latitude,longitud from clients");
    return rows
}

export async function getIdsClients() {
    const [rows] = await pool.query("select id from clients");
    return rows
}

export async function createClient({ name, email, telephone, latitude, longitud }) {
    // DML Operation: Insert
    await pool.query('INSERT INTO clients ( name, email, telephone, latitude,longitud) VALUES ( ?, ?, ?, ?, ?)', [name, email, telephone, latitude, longitud]);
}

export async function updateClient({ name, email, telephone, latitude, longitud }, id) {    
    // DML Operation: Update
    return await pool.query('UPDATE clients SET name = ?, email = ?, telephone = ?, latitude = ?, longitud = ? WHERE id = ?', [name, email, telephone, latitude, longitud, id]);
    
}

export async function deleteClient(id) {
    // DML Operation: Delete
    const [selectedRow] = await pool.query('SELECT * FROM clients WHERE id = ?', [id]);
    await pool.query('DELETE FROM clients WHERE id = ?', [id]);
    return selectedRow

}
export async function getClientById(id) {
    // DML Operation: Select (Get by ID)
    const [ selectedRow]  = await pool.query('SELECT * FROM clients WHERE id = ?', [id]);
    return selectedRow[0]
}





