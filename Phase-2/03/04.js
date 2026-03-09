import fs from 'fs/promises'
// import bcrypt from 'bcrypt'
import { question, questionInt } from 'readline-sync'
import { hashPassword, comparePassword } from './01-bcrypt.js'


const createUser = async () => {
    const user = {
        username: question('Ente the username: '),
        password: question('Create your password: '),
        confirm: question('Confirm password: ')
    }
    const data = await fs.readFile('./users.json', 'utf-8')
    const users = JSON.parse(data)

    const existingUser = users.find((usr) => {
        return usr.username == user.username
    })
    if (existingUser) return console.log('User already exists');


    while (user.password != user.confirm) {
        console.log('Passwords donot match: ');
        user.password = question('Create a password: ')
        user.confirm = ('Confirm your password: ')
    }
    delete user.confirm

    user.password = await hashPassword(user.password)
    users.push(user)
    await fs.writeFile('./users.json', JSON.stringify(users, null, 4))

}

const login = async () => {
    const username = question('Please enter username: ')
    const password = question('Enter your password: ')

    const data = await fs.readFile('./users.json', 'utf-8')
    const users = JSON.parse(data)
    const user = users.find((usr) => {
        return usr.username == username
    })
    if (!user) return 'User not found'
    const auth = await comparePassword(password, user.password)
    if (!auth) return console.log('Invalid password!');
    console.log('Welcomee ' + user.username + '!')
}


const app = async () => {
    console.log('===MENU===');
    console.log('0. Exit');
    console.log('1. Create user');
    console.log('2. Login');
    console.log('3. Send OTP');
    console.log('4. Get Verified');
    const choice = questionInt('Enter your choine: ')
    switch (choice) {
        case 0:
            return
        case 1:
            await createUser()
            break
        case 2:
            await login()
            break
        case 3:
        default:
            break

    }

}
app()