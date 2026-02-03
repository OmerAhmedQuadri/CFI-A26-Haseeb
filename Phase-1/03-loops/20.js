import readlineSync from 'readline-sync'

console.log("enter 1 for rock");
console.log("enter 2 for paper");
console.log("enter 3 for scissors");

let user1 = readlineSync.questionInt("Enter :")
let user2 = readlineSync.questionInt("enter:")

if(user1 == user2)
{
    console.log('Draw');
    
}
else if (
    user1 ==1 && user2 == 3
    ||
    user1 ==2 && user2 == 1
    ||
    user1 ==3 && user2 == 2
){
    console.log('user1 wins')
}else{
    console.log('user2 wins')
}



