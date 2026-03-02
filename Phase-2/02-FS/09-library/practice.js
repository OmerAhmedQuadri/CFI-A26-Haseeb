import fs from 'fs'
import rs from 'readline-sync'
import chalk from 'chalk'
let db = './db/books.json'

fs.readFile(db, 'utf-8', (err, data) => {
    if (err) console.log(err)
    const library = data ? JSON.parse(data) : []

    while (true) {
        let id 
        let index
        let book

        console.log('===LIBRARY===');
        console.log('0. Save and exit');
        console.log('1. Display all books');
        console.log('2. Add a book');
        console.log('3. Delete a book');
        console.log('4. Update an existing book');
        const choice = rs.questionInt('Enter your choice: ')
        switch (choice) {
            case 1:
                if (library.length == 0) console.log('library is empty');
                else {
                    library.forEach((book) => {
                        console.log(`Id:${book.id} `);
                        console.log(`Title:${book.title} `);
                        console.log(`Author:${book.author} `);
                        console.log(`Price:${book.price} `);
                        console.log('------------------------');

                    })
                }
                break
            case 2:
                let book = {
                    id: Date.now(),
                    title: rs.question('Enter the title of the book: '),
                    author: rs.question('Enter the name of the author: '),
                    price: rs.questionInt('Enter the price of the book: ')
                }
                library.push(book)
                break
            case 0:
                const data = JSON.stringify(library,null,4)
                fs.writeFile(db, data, (err) => {
                    if (err) console.log(err);
                    console.log('Saved Successfully');
                })
                console.log('Exiting...');
                return

            case 3:
                 id = rs.questionInt('Enter the id of the book: ')
                 index = library.findIndex(book => book.id == id)
                if (index != 1) {
                    library.splice(index, 1)
                    console.log('Deleted Successfully');
                }
                else {
                    console.log('Book not found');

                }
                break
            case 4:
                id = rs.questionInt('Enter the id of the book: ')
                index = library.findIndex(book =>  book.id == id )
                if (index != -1) {
                   let book = {
                        title: rs.question('Enter the title of the book: '),
                        author: rs.question('Enter the name of the author: '),
                        price: rs.questionInt('Enter the price of the book')
                    }
                    library[index] = [...library[index], ...book]
                }
                else {
                    console.log('book not found');
                }
                break
            default:
                break
        }
    } 
})
