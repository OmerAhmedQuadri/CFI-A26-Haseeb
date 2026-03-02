// 21. Write a function that finds the maximum of three numbers.

function maximum(a, b, c){
    if(a > b && a > c){
        return a
    }
    if(b > a && b > c){
        return b
    }
    if(c > a && c > b){
        return c
    }
}
console.log(maximum(12, 234, 444));
//444
