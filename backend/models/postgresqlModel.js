import { pgConfig } from '../config.js'
import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool(pgConfig);


export async function getClients() {
    //good practice
    const { rows } = await pool.query("select id, name, email, telephone, latitude,longitud from facilita.clients");
    console.log(rows);
    // const [rows] = await pool.query("select * from clients");
    return rows
}

export async function getMapClients() {
    const { rows } = await pool.query("select id, latitude,longitud from facilita.clients");
    return rows
}

export async function getIdsClients() {
    const { rows } = await pool.query("select id from facilita.clients");
    return rows
}

export async function createClient({ name, email, telephone, latitude, longitud }) {
    // DML Operation: Insert
    await pool.query('INSERT INTO facilita.clients ( name, email, telephone, latitude,longitud) VALUES ( $1, $2, $3, $4, $5)', [name, email, telephone, latitude, longitud]);
}

export async function updateClient({ name, email, telephone, latitude, longitud }, id) {    
    // DML Operation: Update
    return await pool.query('UPDATE facilita.clients SET name = $1, email = $2, telephone = $3, latitude = $4, longitud = $5 WHERE id = $6', [name, email, telephone, latitude, longitud, id]);
    
}

export async function deleteClient(id) {
    // DML Operation: Delete
    const selectedRow = await pool.query('SELECT * FROM facilita.clients WHERE id = $1', [id]);
    
    await pool.query('DELETE FROM facilita.clients WHERE id = $1', [id]);
    return selectedRow.rows[0]

}

export async function getClientById(id) {
    // DML Operation: Select (Get by ID)
    
    const  selectedRow  = await pool.query('SELECT * FROM facilita.clients WHERE id = $1', [id]);
    
    return selectedRow.rows[0]
}




