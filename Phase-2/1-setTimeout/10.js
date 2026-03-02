console.log(1);
setTimeout( ()=>{
    console.log('I am first');
    
},0)
console.log('11');
setTimeout(()=>{
    console.log('Iam Second');
    
},0)
console.log('111');
setTimeout(()=>{
    console.log('I am third');
    
},0)

setTimeout(()=>{
    console.log('I am just getting started with Adv. JS');
     setTimeout(()=>{
        console.log('I am just getting started again');
        
     },1000)
},2000)

