var ArrayList = [3, 4, 5, 6, 1, 2, 9, 0, 8, 7];
var counter = 0;
var Num_Array = [];
// Error control: if the length array is lower than 1, do nothing
if (ArrayList.length < 2){
    return;
}

console.log(ArrayList);
while (counter < ArrayList.length){
    counter += 1;
    console.log();
    for (let i = 0; i < Math.floor(ArrayList.length / 2); i++){
        Num_Array.push(ArrayList[i]);
    }
    console.log(Num_Array);
    Num_Array = [];

}
console.log(ArrayList.sort());

