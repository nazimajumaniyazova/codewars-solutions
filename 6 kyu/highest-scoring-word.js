/**
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

 */

function high(x) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arr = x.split(' ').reduce((acc, currentV) => {
        let sum = 0;
        sum = currentV.split('').reduce((totalSum, currentLetter) => {
            for (let i = 0; i < alphabet.length; i++) {
                if (currentLetter === alphabet[i]) {
                    totalSum += i + 1
                }
            }
            return totalSum

        }, 0)
        acc.push(sum)
        return acc
    }, [])
    let m = arr[0]
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (m < arr[i]) {
            m = arr[i]
            n = i
        }
    }
    let res = x.split(' ')
    return res[n]
}