// Requisito 1 - Crie a função verifyPalindrome

// Requisito 2 - Crie a função getHighestIndex
const getHighestIndex = (array) => {
  let highestIndex = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (highestIndex < array[index]) {
      highestIndex = index;
    }
  }
  return highestIndex;
};
console.log(getHighestIndex([1, 2, 3, 4, 5]));
// Requisito 3 - Crie a função getSmallestIndex
const getSmallestIndex = (array) => {
  let smallesttIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (smallesttIndex > array[index]) {
      smallesttIndex = index;
    }
  }
  return smallesttIndex;
};
console.log(getSmallestIndex([-1, 2, -3, 4, 5]));
// Requisito 4 - Crie a função getLongestWord

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

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
