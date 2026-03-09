import { log } from 'console'
import fs from 'fs/promises'

const db = './books.json'

async function readDB () {
    try{
        const data = await fs.readFile(db, 'utf-8')
        return JSON.parse(data)
    }
    catch(error){
        console.log('Read DB error: ',error);
    }
}

async function writeDB(books){
    try{
        const data = JSON.stringify(books, null, 4)
        await fs.writeFile(db, data)
    }
    catch(error){
        console.log('Write DB error: ',error);
    }
}

export{readDB, writeDB}