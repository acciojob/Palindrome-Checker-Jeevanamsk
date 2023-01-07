// complete the given function

function palindrome(str){

  string = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
module.exports = palindrome
