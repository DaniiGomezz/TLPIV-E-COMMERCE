import 'dotenv/config'
import { Server } from './src/models/Server.js'
import {  DataBase} from './src/db/db.js';

const database = new DataBase(); // inicializamos la base de datos

async function startSever() {

    await database.connectDb() // conectamos base de datos 
    const server = new Server()
    server.listen() // iniciamos servidor
}

startSever()