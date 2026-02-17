const num = 5635466.89
console.log(num);
console.log(num.toLocaleString('en-IN'));
console.log(num.toLocaleString('en-US',{
    style :'currency',
    currency : 'EUR'
}));
console.log(num.toLocaleString('en-US',{
    style : 'currency',
    currency : 'INR'
}));
console.log(num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
}));

// console.log(typeof num.toLocaleString);

