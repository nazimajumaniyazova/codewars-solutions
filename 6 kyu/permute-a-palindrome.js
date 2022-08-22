/**
 * Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
 * 
 */
function permuteAPalindrome (input) { 
    if(input.length === 1){
      return true
    }
    let arr = input.split('').sort()
    let ans = []
    let count = 1;
    for(let i=0;i<arr.length;i++){
     if(arr[i]===arr[i+1]){
      count++
     }else{
      ans.push(count)
      count = 1
     }
    }
    let odd = 0
    let even = 0 
    for(let i=0;i<ans.length;i++){
      if(ans[i]%2===0){
        even++
      }else{
        odd++
      }
    }
    if(odd > 1){
      return false
    } else if(odd===0){
      return true
    }else if(even>=1 && odd===1){
      return true
    }
  }