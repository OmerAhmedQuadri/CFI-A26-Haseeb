import express from 'express'
import { getAllBooks, getBookById , addBook, deleteBook} from './controllers/lib-controllers.js'



const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Server is Running')
})


app.get('/api/books', getAllBooks)
app.get('/api/books/:id', getBookById)
app.post('/api/add', addBook)
app.delete('/api/delete/:id', deleteBook)



app.listen(PORT, () => {
    console.log('Server is running at http://localhost:'+PORT);
    
})





/*
GET: 
    get all books - /api/books
    get book by id - /api/books/:id

POST:
    add a book - /api/add
    - id
    - title
    - author
    - price

PUT:
    update a book - /api/update

DELETE:
    delete a book - /api/delete/:id

*/


