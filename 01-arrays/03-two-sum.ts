function findTargetPair(arr: number[], target: number): number[] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return [arr[left], arr[right]]; // Pair mil gaya
    } else if (currentSum < target) {
      left++; // Sum bada karne ke liye left aage badhao
    } else {
      right--; // Sum chota karne ke liye right peeche laao
    }
  }

  return null; // Agar pure array me koi pair na mile
}

// Verification
const numbers1 = [2, 3, 5, 8, 11, 15];
console.log(findTargetPair(numbers1, 13)); // [2, 11]
console.log(findTargetPair(numbers1, 20)); // null