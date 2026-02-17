const num = [23, 54, 96, 108, 73]
const res = num.find((n)=>{
    if (n%2==0) return true
})
const res2 = num.find((n) => n>100)
console.log(res);
console.log(res2);
