/**
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, 
and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. 
Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
 */
function meeting(x) {
    //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    if (x.indexOf('O') != -1) { // if the array contains O, the result of indexOf will be different from -1
        return x.indexOf('O') //return the position of first O element 
    } else {
        return "None available!" // if the indexOf is equal to -1, there is no available rooms
    }
    // return x.indexOf('O') != -1 ? x.indexOf('O') : "None available!" // abridged version
}