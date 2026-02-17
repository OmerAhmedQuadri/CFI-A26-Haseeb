const arr = [21, [[100]], [1,2], 1000]
const flatArr = arr.flat(Infinity)
console.log(flatArr);
//we need to specify the depth of the flat to flatten it completely . if we don't know the depth we use infinity
