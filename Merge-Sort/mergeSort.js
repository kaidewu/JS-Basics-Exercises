var numArray = [3, 4, 5, 6, 1, 2, 9, 0, 8, 7];

// Error control: if the length array is lower than 1, do nothing
if (numArray.length <= 1){
    return;
}

// Take out the half of the length the array
var half_numArray = Math.floor(numArray.length / 2);

// First half of the array
var FirstHalf = [];
for (let i = 0; i < half_numArray; i++){
    FirstHalf.push(numArray[i]);
}

// Second half of the array
var SecondHalf = [];
for (let i = half_numArray; i < numArray.length; i++){
    SecondHalf.push(numArray[i]);
}

// Take out the half of first half of the array
var half_FistHalf = Math.floor(FirstHalf.length / 2);

// First half of the half of first of the array
var First_FirstHalf = []
for (let i = 0; i < half_FistHalf; i++){
    First_FirstHalf.push(FirstHalf[i]);
}

console.log(numArray);
console.log();
console.log(FirstHalf, SecondHalf);
console.log();
console.log(First_FirstHalf);

