import readlineSync from 'readline-sync'
//write a function named userDetails that takes user input for user input for user name and user role and prints it to the console

function userDetails() {
    let username = readlineSync.question('Enter username: ')
    let user_role = readlineSync.question('Enter user role: ')
    // console.log(`Hello ${username}`)
    // console.log(user_role)
    return {username ,user_role}
}
let username = userDetails()

console.log(username)
