async function readDB() {
    try {
        const data = await fs.readFile(db, 'utf-8')

        return JSON.parse(data)
    } catch (error) {
        fs.writeFile(db, '[]')
        return readDB()
    }
}

async function writeDB(tasks) {
    try {
        const data = JSON.stringify(tasks, null, 4)
        await fs.writeFile(db, data)
    } catch (error) {
        console.log(error);
    }
}

export {readDB, writeDB}