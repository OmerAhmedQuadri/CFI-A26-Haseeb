//32. What is the output of the following code, explain why.
// const arr = [1, 2, 3]
// const arr2 = arr
// arr2.push(4)
// clg(arr)
// clg(arr2)

/* 
both the clg will print the same([1, 2, 3, 4]) because the the refrence of
arr is in arr2 so when we alter arr2 we can see the same changes in arr
*/
