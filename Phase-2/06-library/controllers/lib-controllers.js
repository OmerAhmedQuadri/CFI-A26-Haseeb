import { readDB,writeDB } from "../models/lib-models.js";


const getAllBooks = async(req, res)=> {
    const data = await readDB()
    res.json(data)
}

const getBookById = async(req, res) => {
    const id = req.params.id

    const booksLib = await readDB()

    const book = booksLib.find( b => b.id == id)

    if(!book) return res.send('invalid id')

    res.send(book)
}

const addBook = async (req, res) =>{
    const newBook = req.body
    const booksLib = await readDB()

    booksLib.push(newBook)
    await writeDB(booksLib)

    res.send('book added successfully')
}
const deleteBook = async (req,res) =>{
    const id = req.params.id
    const booksLib = await readDB()
    const bookIndex = booksLib.findIndex(b => b.id == id)
    if(bookIndex == -1){
        return res.send('Book not found')
    }
   
    
    booksLib.splice(bookIndex, 1)
    await writeDB(booksLib)

    res.send('Book deleted successfully')
}





export {getAllBooks , getBookById, addBook, deleteBook}