/**
Instructions
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); 

*/

let capitals = function(word) {
    return word.split('').reduce((total, elem, index) => { //1. split the world into the array of letters 2. loop the array 
        if (elem === elem.toUpperCase()) { //the element(letter) equal its uppercase version, it means that the letter is in UpperCase
            total.push(index) //push uppercase letter index into total array
            return total // then return this array 
        }
        return total //else just return the total array without doing any actions 
    }, [])
};