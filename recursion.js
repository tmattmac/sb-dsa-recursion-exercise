/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length - 1) return nums[i];
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, acc='') {
  if (i === words.length) return acc.length;
  const newLongest = words[i].length > acc.length ? words[i] : acc;
  return longest(words, i + 1, newLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if (i === str.length) return '';
  if (i % 2 === 0) return str[i] + everyOther(str, i + 1);
  return everyOther(str, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if (i >= str.length - i - 1) return true;
  return str[i] === str[str.length - i - 1] && isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if (i === str.length) return '';
  return str[str.length - i - 1] + revString(str, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let acc = [];
  function _gather(vals, i = 0) {
    if (i < vals.length) {
      if (typeof vals[i] === 'string') acc.push(vals[i]);
      else if (typeof vals[i] === 'object') _gather(Object.values(vals[i]));
      _gather(vals, i + 1);
    }
    return acc;
  }

  return _gather(Object.values(obj));
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

  function _search(arr, val, l, r) {
    if (l > r) return -1;
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] > val) return _search(arr, val, l, mid - 1);
    if (arr[mid] < val) return _search(arr, val, mid + 1, r);
    return mid;
  }

  return _search(arr, val, 0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
