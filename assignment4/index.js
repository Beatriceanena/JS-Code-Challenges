//Write a function named firstPalindrome which takes a parameter: words. Given an array of
//string words, return the first palindromic string in the array. If there is no such 
//string, return an empty string "".A string is palindromic if it reads the same forward and
// backward.


function firstpalindrome(words){
//create a function for is a palindrome
 function isPalindrome(stringValue){
    let stringValue=stringValue.split('');
    let reversedStringValue= stringValue.reverse();
    let joinedStringValue=reversedStringValue.join();
    return stringValue === joinedStringValue
 }

 for (let word of words) {
    if (isPalindrome(word)) {
        return word;
    }else{
    return '';
}
}
}
// Example usage:
const wordsArray = ["hello", "racecar", "world", "level"];
console.log(firstpalindrome(wordsArray)); // Output: "racecar"

