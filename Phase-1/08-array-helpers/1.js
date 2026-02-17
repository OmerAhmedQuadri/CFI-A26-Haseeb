//Destructuring Object
let user = {
    name:'Haseeb',
    age: 21,
    city:'Hyderabad'
}
function test(usr){
    const{name, age, city='blr', pin = 5000} = usr
    console.log(age , name, city, pin);
    // console.log(usr); 
    
    
}

test(user)

