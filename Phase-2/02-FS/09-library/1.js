import fs from 'fs'
import  rs from 'readline-sync'
import chalk from 'chalk'
const db = './db/books.json'
/*
const library = [
{
     id: ,
     title: ,
     author ,
     price: }]
*/



fs.readFile(db, 'utf-8', (err, data) => {
    if (err) return console.log(err)
    const library = data? JSON.parse(data) : []

    while (true) {
        let id = null
        let index = null
        let book = null
        console.log('\n===LIBRARY===');
        console.log('0. Save and Exit');
        console.log('1. Display library');
        console.log('2. Add a book');
        console.log('3. Delete a book');
        console.log('4. Update an existing book');


        const choice = rs.questionInt('Enter your choice: ')
        switch (choice) {
            case 0:
                const data = JSON.stringify(library, null, 4)
                fs.writeFile(db, data, (err) => {
                    if (err) console.log(err);
                    else console.log('Data Saved');
                })
                console.log('Exiting...');
                return
            

            case 1: {
                if (library.length == 0) console.log('Library is empty');
                else {
                    library.forEach(book => {
                        console.log(`Id: ${book.id}`);
                        console.log(`Title: ${book.title}`);
                        console.log(`Author: ${book.author}`);
                        console.log(`Price: ${book.price}`);
                        console.log('-----------------------');

                    });
                }
            }
                break

            case 2:
                book = {
                    id: Date.now(),
                    title: rs.question('Enter the title of the book'),
                    price: rs.questionInt('Enter the price: '),
                    author: rs.question('Enter the name of the auhtor: ')
                }
                library.push(book)
                break
            case 3:
                id = rs.questionInt('Enter the book id: ')
                index = library.findIndex(book => book.id == id)
                if (index != -1) {
                    library.splice(index, 1)
                    console.log('Deleted successfully');
                }
                else {
                    console.log('Item not found');
                }
                break

            case 4:
                id = rs.questionInt('Enter the book id: ')
                index = library.findIndex(book => book.id == id)
                if (index != -1) {
                    book = {
                        title: rs.question('Enter the title for the book: '),
                        price: rs.questionInt('Enter the price'),
                        author: rs.question('Enter the name of the author: ')
                    }
                    library[index] = { ...library[index], ...book }

                }
                else {
                    console.log('Item not found');
                }
                break
                default:
                    break
        }
    }
})