//30.Write a recursive function to print numbers from 1 to 5.
let num = 1
function print(num){
    if(num > 5){
        return
    }
    console.log(num);
    num++
    print(num)
}
print(num)