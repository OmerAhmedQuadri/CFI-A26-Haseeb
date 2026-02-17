//Question21
const users = [
    { name: 'Alice', age: 17, country: 'India' },
    { name: 'Bob', age: 22, country: 'USA' },
    { name: 'Charlie', age: 15, country: 'India' },
    { name: 'David', age: 25, country: 'India' },
    { name: 'Eve', age: 19, country: 'USA' }
]

const grouped = users.reduce ( (obj,usr)=>{
    let group 
    if(usr.age < 18){
        group = 'minors'
    }else if(usr.age < 25){
        group = 'adults'
    }else{
        group = 'seniors'
    }
    if(!obj[group]) obj[group] = []
    obj[group].push(usr)
    
    
return obj
},{})
console.log(grouped);
 