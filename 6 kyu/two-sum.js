/**
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; 
target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

*/


/** Explanation 
 * let we have [1,2,3,4,5,6] and the target is 5
 * we will take each element(using first element), first is 1, then add to it another elements (in the second loop) 
 * so in our example we will take 1, and staring second loop from next element of the array, it will be 2
 */

function twoSum(numbers, target) {
    let r = [] // to push the results
    for (let i = 0; i < numbers.length; i++) { //will take each array element 
        for (let j = i + 1; j < numbers.length; j++) { //and will sum with the remaining elements 
            if (numbers[i] + numbers[j] === target) { // if the sum of the element and the next element is equal to target element 
                r[0] = i; //push this elements
                r[1] = j;
            }
        }
    }
    return r
}