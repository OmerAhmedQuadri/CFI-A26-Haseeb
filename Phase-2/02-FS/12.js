import fs from 'fs/promises'
import chalk from 'chalk'
let usersDB = './github-users.json'

async function fetchUsers() {
    try {
        const response = await fetch(`https://api.github.com/users`)
        if (!response.ok) {
            return false
        }
        return response.json()

    } catch (error) {
        console.log(chalk.redBright('Error fetching user details'));
        throw error
    }

}
async function saveUsers(users) {
    try {
        // console.log(users);
        
        let data = JSON.stringify(users, null, 4)
        await fs.writeFile(usersDB, data)
        return {
            ok: true,
            message: 'Data saved successfully'
        }
    } catch (error) {
        return {
            ok: false,
            message: 'failed to save data'
        }

    }

}

async function main() {
    let users = await fetchUsers()
    users = users.filter((usr) => {
        return usr.id % 2 == 0
    })
    users = users.map((usr) => {
        return {
            id: usr.id,
            name: usr.login
        }
    })
    let response = await saveUsers(users)
    console.log(response);
    if (response.ok == true) {
        console.log(chalk.greenBright(response.message));
    } else {
        console.log(chalk.redBright(response.message));
    }

}

await main()