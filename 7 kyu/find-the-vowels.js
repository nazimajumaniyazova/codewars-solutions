/**We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/

function vowelIndices(word) {
    return arr = word.split('').reduce((accumulator, currentValue, index) => { //1. split the word into array of letter to check is it a vowel 2) loop the array of letters, will check each letter(element) 
        if (currentValue.match(/[aeiouy]/i)) { //The match() method returns an array if there are matches fount, and returns NULL is there is no matches fount
            //so, if the letter (currentValue) matches to  regular expression, which is vowels, we will get an Array
            //The if statement executes a statement if a specified condition is truthy. So, if there is no matches the match method will return null, which is false
            accumulator.push(index + 1) //save the position  of the matched element
            return accumulator //push the position to the accumulator array and return it
        }
        return accumulator // if no matches return the accumulator array without doing anything
    }, [])
}