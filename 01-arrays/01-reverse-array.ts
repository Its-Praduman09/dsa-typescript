function reverseArray(arr: number[]): number[] {
  let left = 0;                  // Pehla index 0
  let right = arr.length - 1;    // Aakhiri index 4

  while (left < right) {
    // 1. Swap logic
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // 2. Left ko aage aur Right ko peeche khisko
    left++;
    right--;
  }

  return arr;
}

// Verification
const numbers = [10, 20, 30, 40, 50];
console.log("Before Reverse:", numbers);

reverseArray(numbers);

console.log("After Reverse:", numbers);