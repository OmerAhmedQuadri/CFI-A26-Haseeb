//Basic AND
console.log("1",true && true) // true

//2.Basic OR
console.log("2",false || false)//false

//3.Basic NOT Operator
console.log("3",!true) //false

//4.AND with false
console.log("4",true && false) //false

//5.OR with True
console.log("5",false || true) //true

//6.NOT False
console.log("6",!false) //true

//7.Combined AND and NOT
console.log("7",true && !false) // true

//8.OR and AND Together
console.log("8",false || true && false) //false

//9. NOT and AND
console.log("9",!(true && false)) //true

//10.Complex Expression 1
console.log("10.",!(false || false)&& true) //true

//11.OR,AND and NOT
console.log("11",true || false && !true) //true

//12.NOT with OR
console.log("12",!(true || false) && false) //false

//13.Nested NOT and AND
console.log("13",false || !(true && false)) //true

//14. Complex Expression 2
console.log("14",!(false || true && false)) //true

//15. Multiple Operations
console.log("15",true && !(false || true && false)) //true

//16. Parentheses and NOT
console.log("16",!(true && (false || true)) || false) //false

//17: Double NOT
console.log("17",false || !(!(true && false) || false)) //false

//18: Complex Nested Expression
console.log("18",!(false && (true || false)) && true) //true

//19: Multiple NOT Operations
console.log("19",!((true || false) && !(false && true))) //false

//20: Advanced Combination
console.log("20",false || !(true && !(false || true && false))) //false

//21: Triple NOT
console.log("21",!(!true || (false && !(true || false)))) //true

//22: Deeply Nested Expression
console.log("22",!(false || !(!(true && false) && (false || true)))) //true

//23: Very Complex Expression
console.log("23",!((false || true) && !(!(false && true) || !(true || false && true)))) //true

// 24: Combined Expression with OR
console.log("24",(true && false) || true) //true

// 25: Ultimate Challenge
console.log("25",false || !(!(false || true) && false)) //true

//26: AND with Numbers
console.log("26",100 && 40 && 30) //30

//27: AND with Zero
console.log("27",100 && 40 && 0 && 15) //0

//28: AND with Empty String
console.log("28",100 && 40 && "" && 15)//""

//29: AND with Undefined
console.log("29",100 && 40 && undefined && 15) // undefined

//30: AND with Null
console.log("30",100 && 40 && null && 15) // null

//31: AND with All Falsy Values
console.log("31",undefined && null && NaN && "hello") //undefined

//32: OR with Numbers
console.log("32",100 || 40 || 30) //100

//33: OR with Zero First
console.log("33",0 || 40 || 30) //40

//34: OR with Empty String and Zero
console.log("34",0 || "" || 30) //30

//35: OR with Multiple Falsy Values
console.log("35",0 || "" || undefined || null)//null

//36: OR with False First
console.log("36",false || 0 || "" || undefined) //undefined

//37.OR with Strings
console.log("37","" || "hello" || 0) //hello

//38: OR with Null and Number
console.log("38",null || undefined || false || 50) //50

// 39: OR with Boolean Values
console.log("39",false || true || false) //true

//40: OR with NaN
console.log("40",0 || NaN || "JS")//JS

//41: OR with All Falsy
console.log("41",undefined || null || 0 || "") //""

//42: OR with Long Falsy Chain
console.log("42","" || 0 || undefined || null || NaN || "hello") //hello

//43: OR with Two Strings
console.log("43","" || "7") //7

//44: AND with String and Number
console.log("44","hello" && 100 && 50)//50

// 45: AND with False at End
console.log("45",10 && 20 && 30 && false)//false

//46: OR with Number First
console.log("46",25 || 0 || "") //25

//47: AND with NaN
console.log("47",50 && NaN && 100) //NaN

//48: Mixed AND and OR
console.log("48",0 || 10 && 20) //20 "didn't understand"

//49: Complex Mixed Expression
console.log("49",false && 10 || 30) //30 "didn't understand"

//50: Ultimate Value Challenge
console.log("50","" || 0 && 50 || "end") //end "didn't understand"





