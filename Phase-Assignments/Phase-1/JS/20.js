let count = 5
let id = setInterval(() => {
    console.log(count);
    if(count == 0){
        console.log('Time\'s up');
        clearInterval(id)
    }
    
    count--
}, 1000);