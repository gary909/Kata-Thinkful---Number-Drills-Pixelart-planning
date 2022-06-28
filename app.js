function isDivisible(wallLength, pixelSize) {
    if (wallLength % pixelSize == 0) {
        return true
    } else {
        return false;
    }
}

console.log(isDivisible(4050, 27)); // true
console.log(isDivisible(4066, 27)); // false
console.log(isDivisible(10000, 20)); // true
console.log(isDivisible(10005, 20)); // false
console.log(isDivisible(10005, 1)); // true