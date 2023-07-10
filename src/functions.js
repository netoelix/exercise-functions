// Requisito 1 - Crie a função verifyPalindrome
const verifyPalindrome = (string) => {
  string = string.toLowerCase();
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
// Requisito 2 - Crie a função getHighestIndex
const getHighestIndex = (array) => {
  let highestIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highestIndex < array[index]) {
      highestIndex = index;
    }
  }
  return highestIndex;
}
// Requisito 3 - Crie a função getSmallestIndex
const getSmallestIndex = (array) => {
  let smallesttIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (smallesttIndex > array[index]) {
      smallesttIndex = index;
    }
  }
  return smallesttIndex;
}
// Requisito 4 - Crie a função getLongestWord
const getLongestWord = (array) => {
  let biggestWord = '';
  for (let index = 0; index < array.length; index += 1) {
    let word = array[index];
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
}
// Requisito 5 - Crie a função countHighestNumberMaxOccurrences
const countHighestNumberMaxOccurrences = (array) => {
  let highestNumber = 0;
  let countNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
}
// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => {}),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => {}),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => {}),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => {}),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => {}),
};
