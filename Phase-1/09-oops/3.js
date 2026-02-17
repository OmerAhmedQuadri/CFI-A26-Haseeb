const user = {
    name: 'omer',
    age: 21,
    balance: 101,
    getDetails: function() {
        console.log(`Name: ${this.name}
Age: ${this.age}
Balance: ${this.balance}`);
        
    },
    updateBalance: function(bal){
        if(bal < 0 || isNaN(bal) || typeof(bal)!= 'number')return null
        this.balance = bal
        return this.balance
        
    },
    isAdult : function(){
        return this.age>=18 
      
    },
    updateAge: function(age) {
        if(age < 0 || isNaN(age) || typeof(age)!= 'number')return null
        this.age = age
        return age
    },
    getbalance: function(){
        return this.balance
    }

}
console.log(user.updateBalance(3000000));
console.log(user.isAdult());
console.log(user.updateAge(34));
console.log(user.getbalance());


// console.log(user);
