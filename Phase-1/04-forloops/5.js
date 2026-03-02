let rows = 4
let cols = 4
for(let i=1; i<=rows; i++){
    let str= ''
    for(let j=i; j<=cols; j++){
        str = str + j + ' '
    }
    cols++
    console.log(str)
}