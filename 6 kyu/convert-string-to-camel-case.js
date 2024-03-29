/**
    Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
    The first word within the output should be capitalized only if the original word was capitalized 
    (known as Upper Camel Case, also often referred to as Pascal case).

    Examples
    "the-stealth-warrior" gets converted to "theStealthWarrior"
    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
  
 */

function toCamelCase(str){
    let res = ''
    for(let i =0;i<str.length;i++){
      if(str[i]==='-' || str[i]==='_'){
        res = res + str[i+1].toUpperCase() //if we found the letter that comes after - or _ we will add it to res uppercased
        i= i+ 1;  //as we already added an uppercase letter we need to skip the next letter
        continue 
      }
      res = res + str[i]
    }
    return res
}