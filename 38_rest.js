/*
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; // first = 1, second = 2, rest = [3, 4, 5]
console.log(first);
console.log(second);
console.log(rest);
*/
/*
function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
*/

const user = {
  name: "김사과",
  age: 20,
  city: "서울",
};

const { name, ...rest } = user;

console.log(name);
console.log(rest);
