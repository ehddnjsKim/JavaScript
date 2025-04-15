// 일반 함수
function add1(a, b) {
  return a + b;
}

// 화살표 함수 : 일반함수를 편하게 쓰기 위해 사용. 무조건 return형.
const add2 = (a, b) => a + b;

// 매개변수가 1개일 땐 괄호 생략 가능
const square = (x) => x * x;

// 코드 블록이 있을 경우 return을 명시해야 함
const add3 = (a, b) => {
  return a + b;
};

const obj = {
  name: "김사과",
  sayHello: function () {
    // 익명함수
    setTimeout(() => {
      console.log("안녕! 나는 " + this.name); //
    }, 1000); // 1000::1초. 1초 후 앞에있는 함수 실행
  },
};

obj.sayHello();
