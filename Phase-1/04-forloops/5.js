let rows = 4
let cols = 5
for( i=1; i<=rows; i++){
    str= ''
    for( j=i; j<=cols; j++){
        str = str + j + ' '
    }
    cols++
    console.log(str)
}