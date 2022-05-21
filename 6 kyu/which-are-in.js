/**Given two arrays of strings a1 and a2 return a sorted array r in 
lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates. 
*/
function inArray(array1, array2) {

    let r = array1.filter(currentV => { //loop each element of array1 and return elements that satisfies to our conditions 
            let count = 0 // count how many time the certain element from array1 contains in array2 elements
            for (let j = 0; j < array2.length; j++) { //loop array2
                if (array2[j].includes(currentV)) { //if the current element from array1 contains in any element of array2
                    count++ //increase the count
                }
            }
            return count > 0 ? true : false //if count more than 0, return true so the filter method can return this element
        }).sort() // sort the result in lexicographical order 
    return r;
}