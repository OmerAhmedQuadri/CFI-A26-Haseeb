const user = {
    name: 'omer',
    age: 21,
    balance: 101,
    getDetails: function() {
        return (`Name: ${this.name}
Age: ${this.age}
Balance: ${this.balance}`);
        
    },
    updateBalance: function(b){
        if(b < 0)return undefined
        this.balance = b
        return this.balance
        
    },

}
console.log(user);
// console.log(user.getDetails);
console.log(user.getDetails())
console.log(user.updateBalance(50))


//data : properties , attributes
//behaviour : methods , features
// encapsulation(for now) :  
