/*
Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0
*/

console.log('Expecting 6')
console.log(countVowels('you are great!'))
console.log('Expecting 0');
console.log(countVowels('why?'));
console.log('Expecting 2');
console.log(countVowels('hello'))

function isVowel(character) {
    const vowels = 'aeiou';
    return vowels.indexOf(character) >= 0;
}

function countVowels(word) {
    return word.split('').filter(isVowel).join('').length;
}