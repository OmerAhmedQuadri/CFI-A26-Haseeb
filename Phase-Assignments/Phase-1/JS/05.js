let str = ''
for (let i = 0; i <= 30; i++) {
   if(i%3==0){
    continue
   }
   else{
    
    str = str + i + ' '
   }
    
}
console.log(str);
