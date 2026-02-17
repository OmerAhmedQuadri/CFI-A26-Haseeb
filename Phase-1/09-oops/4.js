class User {
    #balance 
    constructor(name, age, bal){
this.name = name
this.age = age
this.#balance = bal
    }
    getBalance(){
        return this.#balance
    }
    deposite(amt){
        if(amt < 0 || isNaN(amt) || typeof(amt)!= 'number')return null
        this.#balance +=amt
        return this.#balance
    }
    withdraw(amt){
        if(amt < 0 || isNaN(amt) || typeof(amt)!= 'number')return null
        this.#balance -= amt
        return this.#balance
    }
}

const user1 = new User('omer', 21, 101)
 
console.log(user1.getBalance())
console.log(user1.deposite(500))
console.log(user1.withdraw(250))
console.log(user1);


