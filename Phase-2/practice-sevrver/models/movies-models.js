import fs from 'fs/promises'
const db = './movies.json'

async function readDB() {
    try {
        const data = await fs.readFile(db, 'utf-8')
        return JSON.parse(data)

    } catch (error) {
        console.log('Error reading DB', error);
    }
}

async function writeDB(movies) {
    try {
        const data = JSON.stringify(movies, null, 4)
        await fs.writeFile(db, data)
    } catch (error) {
        console.log('Error writing DB', error)
    }
}

export { readDB, writeDB }