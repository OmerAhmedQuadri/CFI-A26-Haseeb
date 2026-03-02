import fs from 'fs'
import { json } from 'stream/consumers'

const users = [
    {name: 'Omer', sge: 21, city: 'Hyderabad'},
    {name: 'Fahad', age: 21, city: 'Masabtank'},
    {name: 'Fazal', age: 22, city: 'Tolichowki'}
]

console.log(users)
console.log(typeof users)
const data = JSON.stringify(users ,null, 4)
console.log(data);
console.log(typeof data);


