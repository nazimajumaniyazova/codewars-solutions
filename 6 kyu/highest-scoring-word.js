/**
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

 */

function high(x) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arr = x.split(' ').reduce((acc, currentV) => { // 1. split the given string into an array of words (using split()), 2. using reduce() loop through each element of the array
            let sum = 0; // to sum the total score of the world
            sum = currentV.split('').reduce((totalSum, currentLetter) => { // 1. the current world split into letters, 2. loop through each letter to count its score
                for (let i = 0; i < alphabet.length; i++) { //iterate through the array to find if an array element matches a letter
                    if (currentLetter === alphabet[i]) { // if currentLetter matches  to array element
                        totalSum += i + 1 // summarize the array element's index (the index is the letter's score)
                    }
                }
                return totalSum

            }, 0)
            acc.push(sum) // sum is the score of 1 world..and will push it to arr
            return acc
        }, [])
        //the arr array contains the scores of each world of given string in due order
        //now we need to find the max element of the arr, that will be the highest score
    let m = arr[0] // let assume first element is max element 
    let n = 0; // will contain the index of the max element, the index of the maximum element is needed to return the corresponding word
    for (let i = 0; i < arr.length; i++) {
        if (m < arr[i]) { //if m is less than arr[i] element, then the arr[i] will be max element
            m = arr[i] // change the max element
            n = i // save the index of the new maximum element
        }
    }
    let res = x.split(' ') //once again split the string into an array of words
    return res[n]
}