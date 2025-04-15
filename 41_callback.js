/*
console.log("물 끓이기 시작!");
setTimeout(function () { // 필요할때만 사용 후 삭제됨됨
  console.log("면 끓이기!");
}, 3000); // 3초후 실행
console.log("계란 준비하기!"); //먼저 실행
*/
/*
function greet(name, callback) {
  console.log("안녕, " + name + "!");
  callback(); // 나중에 호출됨
}

function sayBye() {
  console.log("잘 가!");
}

greet("김사과", sayBye); 
*/
/*
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2); // n에 매개변수를 하나씩 넣어주고 * 2를 해서 저장
console.log(doubled);
*/
/*
function doSomething(callback) {
  console.log("작업 시작!");
  callback();
}

doSomething(() => {
  console.log("작업 완료!");
});
*/
/*
const calc_add = (a, b) => a + b;
const calc_multiply = (a, b) => a * b;

function calculater(num1, num2, action) {
  if (num1 < 0 || num2 < 0) return;

  const result = action(num1, num2);
  return result;
}

console.log(calculater(10, 3, calc_add));
console.log(calculater(10, 3, calc_multiply));
*/
/*
    회문
    회문을 재귀함수를 통해 체크하는 프로그램을 만들어보자
    isPalindrome(str)
    회문이면true or 아니면false
*/

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
