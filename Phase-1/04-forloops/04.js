let matrix = [
    [11,22,33],
    [111,222,333],
    [1000,2000,3000]
]

// console.log(matrix);

// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i]);
// }

// for (let i = 0; i < matrix.length; i++) {
//     let str = ''
//     for (let j = 0; j < matrix[i].length; j++) {
//         // console.log(matrix[i][j]);
//         str = str + matrix[i][j] + ' '
//     }
//     console.log(str);
    
// }

// for (let i = 0; i < matrix.length; i++) {
//     let str = ''
//     for (let j = 0; j < matrix[i].length; j++) {
//         // console.log(matrix[i][j]);
//         str = str + matrix[i][j] + ' '
//         console.log(str);
//     }
    
// }

// let sum =0 
// for (let i = 0; i < matrix.length; i++) {
//     let str = ''
//     for (let j = 0; j < matrix[i].length; j++) {
//         // console.log(matrix[i][j]);
//         // str = str + matrix[i][j] + ' '
//         // console.log(str);
//         sum = sum+matrix[i][j]
//     }
    
// }
// console.log(sum);

for (let i = 0; i < matrix.length; i++) {
    let str = ''
    for (let j = 0; j < matrix[i].length; j++) {
        // str = str + matrix[i][j] + ' '
        // console.log(str);
        matrix[i][j]= matrix[i][j]*2
        console.log(matrix[i][j]);
    }
    
}

