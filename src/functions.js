// Requisito 1 - Crie a função verifyPalindrome

// Requisito 2 - Crie a função getHighestIndex
function getHighestIndex(array) {
  let highestValue = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highestValue > array[index]) {
      highestValue = index;
    }
  }
    return highestValue;
}
console.log(getHighestIndex());
// Requisito 3 - Crie a função getSmallestIndex

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
