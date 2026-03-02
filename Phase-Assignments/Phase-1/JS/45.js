//45. How does this keyword behave differently in arrow functions compared
// to normal functions?

let student = {
    name:'Haseeb',
    age: 21,
    greet: ()=>{
        console.log(this.age);
        
    }
}
student.greet()

//this keyword does'nt work in arrow functions because arrow functions have lexical scope