let year = 2024

function leapYear(year){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                console.log('It is a leap year');
            }else{
                console.log('Not a leap year');
            }
        }else{
                console.log('It is leap year');
        }
    }else{
        console.log('Not a leap year');
        
    }
}
leapYear(year)