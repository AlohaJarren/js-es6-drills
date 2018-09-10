/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 * 
 */
//monkey = currentIndex
//boosted = accumulated
var stringCount = function(str) {
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(arr) {
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr) {
  return arr.reduce( (boosted, monkey) => {
    return boosted + monkey; 
  });
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr) {
  return arr.map(index => {
    return index.length;
  }); //maps the length of every element
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(arr) {
  return arr.reduce( (boosted, monkey) => {
    return boosted + monkey.length; //adds the current index length to accumulated
  },0); 
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str) {
  return str.split(''); //splits the string into an array
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(arr) {
  return arr[arr.length-1].length; //gets the length of the array-1 then gets the length of the element
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr) {
  return arr.reduce( (boosted, monkey) => {
    //return monkey < 10? boosted + monkey : boosted
    if(monkey < 10) {
      return boosted + monkey; //if currentIndex < 10 : add to accumulated | else : accumulated = accumulated
    } else {
      return boosted;
    }
  },0)
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(arr) {
  return arr.reduce( (boosted, monkey) => {
    if(monkey.length > 10) {
      return boosted += 1; //if currentIndex.length > 10 : add to accumulated | else : accumulated = accumulated
    } else {
      return boosted;
    }
  },0)
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr) {
  return arr.reduce( (boosted, monkey) => {
    return boosted * monkey;
  },1) // 1 otherwise NaN or 0
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(arr) {
  return arr.reduce( (boosted, monkey) => {
    if(monkey >= 0) {
      return boosted + monkey; //if currentIndex is positive : add to accumulated | else : accumulated = accumulated
    } else {
      return boosted;
    }
  }, 0)
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = arr => {
  return arr.reduce( (boosted, monkey) => {
    if(monkey.length <= 3) {
      return boosted += 1; //if currentIndex <= 3 : add to accumulated | else : accumulated = accumulated
    } else {
      return boosted;
    }
  },0)
};

/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  return arr.map(index => {
    return index * 2;
  })
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */

var countObjects = function(arr) {
  return arr.length;
};

module.exports = {
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  doubleArray: doubleArray,
  countObjects: countObjects
};
