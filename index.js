function isPalindrome(word) {
  // Write your algorithm here
  let reg=/[\W_]/g
  let lowWord=word.toLowerCase().replace(reg,"");
 let reversed=lowWord.split("").reverse().join("");
 if(reversed===lowWord){
  return true;
 }else
 {
  return false;
 }
}
palindrome("racecar")

/* 
  Add your pseudocode here
  if race=/;===race/; its true
    racer===racer its false
*/
  
/*
  Add written explanation of your solution here
  1.we create a regular expression that matches any alphanumeric characters in the word
  2.convert the string to lowercase and using replace()match the reg and replace with nothing
  3.we take lowWord and split it to array of letters reverse them and join them again getting the new word
  4.compare the reversed word with the original to get the boolean value
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


function palindrome(str){
  let reg=/[\W_]/g
  let lowStr=str.toLowerCase().replace(reg,"");
 let reversed=lowStr.split("").reverse().join("");
 if(reversed===lowStr){
  return true;
 }else
 {
  return false;
 }
}
 
palindrome("deno")