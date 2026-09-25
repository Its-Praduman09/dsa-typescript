// check palindrome or not

function checkPalindrome(str: string): boolean {
    let left=0
    let right=str.length-1

    while(left<right){
        if(str[left]!==str[right]){ 
            return false
        }
        left++
        right--
    }
    return true
}
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("racecar")) // true