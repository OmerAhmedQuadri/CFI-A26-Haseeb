class User {
    #balance = 0
    constructor(name, age, city, bal) {
        this.name = name
        this.age = age
        this.city = city
        this.#balance = bal
    }

    static validateUserDetails(name, age, city, bal) {
        if (!name || typeof (name) != 'string' || name.trim().length < 3) {
            throw new Error('Please enter a valid name')
        }
        if (!age || typeof (age) != 'number' || isNaN(age) || age < 18 || age > 100) {
            throw new Error('Please enter a valid age')
        }
        if (!city || typeof (city) != 'string' || city.trim().length < 3) {
            throw new Error('Please enter a valid city')
        }
        if (!bal || typeof bal != 'number' || isNaN(bal) || bal < 0 || bal > 10000)
            throw new Error('Please enter valid balance')
    }


    getDetails() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nCity: ${this.city}`);
    }


    withdraw(bal) {
        if (!bal || typeof (bal) != 'number' || isNaN(bal) || bal < 1 || bal > 10000) {
            throw new Error('Please enter a valid amount to withdraw')

        } if (this.#balance > bal) {
            throw new Error('Amount cannot be greater than existing balance')

        } this.#balance -= bal
        return this.#balance

    }

    deposit(bal) {
        if (!bal || typeof (bal) != 'number' || isNaN(bal) || bal < 1) {
            throw new Error('enter valid amount to deposit')
        } 
        if (bal > this.#balance) {
            throw new Error('please enter a valid amount')

        } 
        this.#balance += bal
        return this.#balance
    } 
    
    updateUserDetails(name, age, city) {

    }
}
const omer = new User('omer', 21, 'Hyderabad')
omer.getDetails()
console.log(omer);
omer.withdraw(60)
omer.deposit(90)

