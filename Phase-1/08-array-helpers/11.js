const fruitsArray = ['mango', 'apple', 'anas', 'apple', 'orange', 'mango', 'mango']

const fruitsObject = fruitsArray.reduce ((obj , fruit) =>{
    console.log(obj);
    if (!(obj[fruit])) obj[fruit] = 1
    else obj[fruit]++
    return obj
}, {})

console.log(fruitsObject);
 