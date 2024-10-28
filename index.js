import 'dotenv/config'
import { Server } from './models/server.js'
import {  DataBase} from './db/db.js';

const database = new DataBase(); // inicializamos la base de datos

async function startSever() {

    await database.connectDb() // conectamos base de datos 
    const server = new Server()
    server.listen() // iniciamos servidor
}

startSever()