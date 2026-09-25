// const arr:number[]=[10,20,30,40,50];

// console.log(arr[arr.length-1])

// const numbers:number[]=[5,10,15]
// console.log(numbers)
// numbers[1]=99
// console.log(numbers)

// Swap Do elements

// let a = 10;
// let b = 20;

// // Third variable (temp) use karke swap:
// let temp = a; // temp = 10
// a = b;        // a = 20
// b = temp;     // b = 10

// console.log("a:", a, "b:", b); // Output: a: 20, b: 10

// const numbers:number[]=[100,200]
// let temp=numbers[0]
// numbers[0]=numbers[1]
// numbers[1]=temp
// console.log(numbers)


const numbers:number[]=[10,20,30,40,50]
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
console.log("Reverse Order")
const numbers1:number[]=[10,20,30,40,50]
for(let i=numbers1.length-1; i>=0; i--){
    console.log(numbers1[i])
}