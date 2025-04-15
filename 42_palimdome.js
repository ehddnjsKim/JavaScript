function isPalindrome(str, left = 0, right = null) {
  if (right === null) {
    right = str.length - 1;
  }
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("역삼역"));

/*
function isPalindrome(str) {
    if (typeof str !== "string") {
      return false;
    }
  }
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.lenth - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1)); // 함수 정의 및 기본 조건 확인:function isPalindrome(str) {
*/
