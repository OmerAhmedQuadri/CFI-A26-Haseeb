import { question, questionInt } from 'readline-sync'
import fs from 'fs'

const db = './users.json'

fs.readFile(db, 'utf-8', (err, data) => {
    if (err) return console.log(err);

    const users = JSON.parse(data)
    console.log(users);
    const choice = question(' do you want to create a new user: ')

    if (choice == 'y') {
        const user = {
            name: question('Enter the name: '),
            age: questionInt('Enter the age: '),
            city: question('Enter the city: ')

        }
        users.push(user)
    }
    fs.writeFile(db, JSON.stringify(users,null,4), (err) => {
        if (err) return console.log(err);
        console.log('User created successfully');


    })
  console.log('Exiting...');
})