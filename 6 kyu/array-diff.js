/**
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */
function arrayDiff(a, b) {
    return a.filter(a => { //will loop the first array and return elements that satisfies conditions
        let count = 0; //need to count how many times the certain element repeats in array b
        for (let i = 0; i < b.length; i++) { // to check that need loop the array b
            if (a === b[i]) { //if element from the array a is equal to some element from the array b
                count++ //will increment the counter
            }
        }
        return count > 0 ? false : true //if the count more than 0, this means that the element from array a is present in array b
    })
}