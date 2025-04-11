/*
function sayHello() {
  console.log("안녕하세요!");
}
*/

//sayHello();

/*
const sayHello = function () {
  console.log("안녕하세요!");
};
sayHello();
*/

// 1. 매개변수가 없는 함수
function showMessage() {
  console.log("환영합니다!");
}

showMessage();

// 2. 매개변수가 있는 함수
function greet(name) {
  console.log("안녕하세요," + name + "님");
}

greet("김사과");
greet();
greet(true);

function subtract(num1, num2) {
  result = num1 - num2;
  console.log(`뺼셈 결과:${result}`);
}

subtract(10, 5);
subtract("십", "오");

// 3. 리턴이 있는 함수
function add(a, b) {
  return a + b;
}

console.log(add(10, 3));
result2 = add(10, 3);
console.log(result2);

// 4. 기본값이 있는 함수
function greet2(name = "게스트") {
  console.log("안녕하세요," + name + "님!");
}

greet2();
greet2("김사과");

// 5. 가변 매개변수 함수
function sum(...numbers) {
  // numbers = [1, 3, 5] -> 배열로 값을 받음
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 3, 5));
console.log(sum(10, 30, 50));

// 6. 즉시 실행 함수 -> 함수를 만든 상태에서 즉시 실행
(function () {
  console.log("이 함수는 즉시 실행됩니다.!");
})();

// 7. 함수 안에 함수
function outer() {
  function inner() {
    console.log("안쪽 함수 실행");
  }
  inner();
}

outer();

// 8. 함수에서 함수 반환(고차 함수)

/*
    function(name){
    console.log('안녕하세요 + ',' + name + '님');
    };
*/

function createGreeting(message) {
  return function (name) {
    console.log(message + "," + name + "님");
  };
}

const hello = createGreeting("안녕하세요");

/*
    const hello = function (name) {
        console.log('안녕하세요 + ',' + name + '님');
    };
*/
hello("김사과");
