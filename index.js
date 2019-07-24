//challenge 1 reverse a string 

//create a function that given as input a string outputs the string in reverse
//ex reverseString(string){}

// function reverse(str) {
//   let strSplit = str.split('');

//   strSplit.reverse();
//   console.log(strSplit);

// let revString = '';
// for (let i = str.length - 1; i >= 0; i--) {
//   revString = revString + str[i];
// }
// console.log(revString);

// return revString;

// let revString = '';
// for(let char of str){
//   revString = char + revString
// }
// console.log(revString)

// return revString

// // }
// function isPalindrome(strin){
// const revString = strin.split('').reverse().join('')

// return revString === strin;
// }

// function reverseString(int){
//   const revString = int.toString().split('').reverse().join('');
//   return parseInt(revString)
// }


// function capitalizeLetters(str) {
//   //   const strArr =str.toLowerCase().split('');
//   //   for(let i = 0; i<strArr.length;i++){
//   //     strArr[i] = strArr[i].substring(0,1).toUpperCase()+strArr[i].substring(1);
//   //   }
//   //   return strArr.join(' ');
//   ///////////////////////////
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(' ');
//     }

//function // CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  // const charMap = {};
  // let maxNum = 0;
  // let maxChar = '';

  // str.split('').forEach(function(char) {
  //   if(charMap[char]) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // });

  // for(let char in charMap) {
    
  //   if(charMap[char] > maxNum) {
  //     maxNum = charMap[char];
  //     maxChar = char;
  //   }
  // }

    const sortedStr = str.split('').sort();
  const maxChar = {char: '', count: 0};
  const currentChar = {char: '', count: 0};

  sortedStr.forEach(char => {
    if(currentChar.char === char){
      currentChar.count++;
    } else {
      if(maxChar.count < currentChar.count){
        maxChar.char = currentChar.char;
        maxChar.count = currentChar.count;
      }
      currentChar.char = char;
      currentChar.count = 0;
    }
  });

  return maxChar.char;
  return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// Call Function
const output = reverseString('hello');

console.log(output);

  const output = capitalizeLetters("i love women")
  console.log(output)