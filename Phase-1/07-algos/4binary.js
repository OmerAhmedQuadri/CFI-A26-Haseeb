let num = [22, 23, 34, 65, 76, 98, 104]
let tar = 34
let right = num.length - 1
let left = 0
let found = false
let mid = (left + right) / 2

while (right >= left) {
    mid = (left + right) / 2

    if (num[mid] == tar) {

        found = true
        break
    } else if (num[mid] < tar) {
        left = mid + 1
    } else {
        right = mid - 1
    }
    
}

if (found) {
    console.log('Element found at ' + mid)
} else {
    console.log('Element not found');

}



















