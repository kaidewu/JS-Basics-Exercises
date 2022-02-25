// Let's declare each side of the triangle
const a = 5;
const b = 6;
const c = 7;
// First we need to find out the semiperimeter
var s = (a + b + c) / 2;
// Now we calculate the area of the triangle
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
console.log(area)

