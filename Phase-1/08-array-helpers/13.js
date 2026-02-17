const users = [
    { name: 'omer', age: 17},
    { name: 'zayd', age: 23},
    { name: 'taha', age: 22},
    { name: 'fahad', age: 21},
    { name: 'atif', age: 21},
    { name: 'yash', age: 21},
    { name: 'haseeb', age: 20},
    { name: 'a rahman', age: 22},
    { name: 'anas', age: 24},
    { name: 'maseeh', age: 23},
    { name: 'afnan', age: 23},
]


const usersObject = users.reduce( (obj, usr) =>{
    // console.log(obj, usr)
    if(obj[usr.age]) obj[usr.age].push(usr.name)
        else obj[usr.age] = [usr.name]
  
  
  
return obj
} ,{})
console.log(usersObject);
