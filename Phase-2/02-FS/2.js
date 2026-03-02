import fs from 'fs'
console.log('Start')
let data = fs.readFileSync('file.txt', 'utf8')
console.log(data);
console.log('End');

