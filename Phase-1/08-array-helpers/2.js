function sayHello(){
    console.log('Hello world')
    console.log('this is inside sayHello');
}

function pleaseCallThis(func){
    console.log('this is inside please call this');
    func('hello')
}
pleaseCallThis((ele) => {
    console.log('Hello world '+ ele);
    
})

pleaseCallThis(sayHello)

