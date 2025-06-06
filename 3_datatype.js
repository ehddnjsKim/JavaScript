/*
    기본형(Primitive Type)
*/
let num = 20; // 숫자
let str = "Hello, JS!"; // 문자열
let isReady = true; // 불리언
let nothing = null; // null
let notDefined; // undefined (선언만 하고 값 없음)
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
let unique = Symbol("id"); // Symbol

console.log("기본형 타입 출력:");
console.log("num:", num);
console.log("str:", str);
console.log("isReady:", isReady);
console.log("nothing:", nothing);
console.log("notDefined:", notDefined);
console.log("bigNumber:", bigNumber);
console.log("unique:", unique);

let obj1 = { name: "apple" };
console.log(obj1.name);
let obj2 = obj1;
obj2.name = "banana";
console.log(obj2.name); // banana
console.log(obj1.name); // banana

/*
    참조형(Reference Type)
*/
let person = { name: "apple", age: 20 };
let numbers = [1, 2, 3, 4, 5];
let greet = function () {
  return "안녕하세요";
};
let now = new Date();

console.log("참조형 타입 출력");
console.log("person:", person);
console.log("numbers:", numbers);
console.log("greet():", greet());
console.log("now:", now);
