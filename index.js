function isPalindrome(word) {
  // Write your algorithm here
  const reverseString = (str) => {
    return str.split('').reverse().join('');
};
for (const s of word) {
  if (word === reverseString(word)) {
      return true
  } else {
      return false
  }
}
}


/* 
  Add your pseudocode here

  create function to reverse string
  iterate through original string
  compare reversed string and original string

*/

/*
  Add written explanation of your solution here
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
