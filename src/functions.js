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
    if (array[index] > array[highestIndex]) {
      highestIndex = index;
    }
  }
  return highestIndex;
};
// Requisito 3 - Crie a função getSmallestIndex
const getSmallestIndex = (array) => {
  let smallestIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < array[smallestIndex]) {
      smallestIndex = index;
    }
  }
  return smallestIndex;
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
  let highestNumber = array[0];
  let countNumber = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
      countNumber = 1;
    } else if (array[index] === highestNumber) {
      countNumber += 1;
    }
  }

  return countNumber;
}
console.log(countHighestNumberMaxOccurrences([1, 9, 2, 3, 9, 5, 7]));
// Não modifique as linhas abaixo (codigo desenvolvido pela Trybe)
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => {}),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => {}),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => {}),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => {}),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => {}),
};
