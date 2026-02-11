//Exchange sort
let arr = [9, 2, 4, 6, 8, 12]
// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//     if (arr[i] >arr[j]){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//     }
// }
// }


function exchangeSort(){
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
    if (arr[i] >arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

    }
}
}
return arr
}
console.log(exchangeSort(arr));
