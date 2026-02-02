//Question61
let num1 = 10
let num2 = 5
let operator = '+'
switch(operator){
    case '+':
        console.log(num1+num2)
        
    case '-':
        console.log(num1-num2)
        
    case '*':
        console.log(num1*num2)

    case '/':
        console.log(num1/num2)
        case '%':
            console.log(num1%num2)
}

//Question62 //if else
let light = 'Yellow'
if(light=='Red'){
    console.log('Stop')
}
else if(light == 'Yellow'){
    console.log('Get ready')
}
else if(light == 'Green'){
    console.log('Go')
}

//switch
let lightt = 'Yellow'
switch(lightt){
    case 'Red':
        console.log('Stop')
        break
    case 'Yellow':
    console.log('Get ready')
    break
    case 'Green':
        console.log('Go')
}


//Question63
let balance = 5000
withdrawAmount = 3000
if(withdrawAmount<=balance){
    console.log(balance = balance - withdrawAmount)
}
else{
    console.log('Insufficient Balance')
}


//Question64
let year =2024
if(year%4==0 && !100||400){
    console.log('Leap Year')
}

else{
    console.log('Not a leap year')
}


//Question65
let password = 'pass123'
let Length = password.length
if (Length>=12){
    console.log('Strong')
}
else if(Length>=8){
    console.log('Medium')
}
else if(Length<8){
    console.log('Weak')
}


//Question66
let price = 2500
let isPremiumMember = false
let discount
if(isPremiumMember==true){
    discount = 30
}
else if(price>=5000){
    discount = 25
}
else if(price>=3000){
    discount=20
}
else if(price>=1000){
    discount = 15
}
else {
    discount=10
}
console.log(`Final price = ${price-(price*discount/100)}`)


//Question67
let marks = 75
let attendance=80
let hasFee = true
if (marks>=40 && attendance>=75 && hasFee==true){
    console.log('Eligible')
}
else{
    console.log('Not eligible')
}

//Question68
let num = 12
if(num==0){
    console.log("Zero")
}
else if (num>0){
    if(num%2==0){
        console.log('Positive')
    }
    else{
        console.log('Odd')
    }
}
else if(num<0){
    if(num%2==0){
    console.log('even')
}
else  {
    console.log("Odd")
}
}

//Question69
let playerChoice = 'paper'
let computerChoice = 'scissor'
if(playerChoice=='rock' && computerChoice== 'scissors'){
    console.log('Rock beats Scissors')
    console.log('You win');
    
}
else if(playerChoice=='paper' && computerChoice=='scissor'){
    console.log('Scissors beats paper')
console.log('Computer Wins');
 }

else if(playerChoice=='paper' && computerChoice=='paper'){
    console.log('Draw');
}



//Question70
let hour = 14
if (hour>5 && hour<=12){
console.log('Good morning')
}
else if (hour>12 && hour<=17){
    console.log('Good afternoon');
    }
else if(hour>17 && hour<=21){
    console.log('Good evening');
    }
else{
    console.log('Good Night');
    
}