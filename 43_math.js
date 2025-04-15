// min(): 가장 작은 수를 반환
console.log(Math.min()); // Infinity : 값이 없기 때문에 양의 무한대
console.log(Math.min(1, 10, -3, 100, "-101"));
console.log(Math.min(1, 10, -3, "천", "-101"));

// max(): 가장 큰 수를 반환
console.log(Math.max()); // -Infinity
console.log(Math.max(1, 10, -3, 100, "-101"));
console.log(Math.max(1, 10, -3, "천", "-101"));

// round(): 소수점 첫번쨰 자리에서 반올림하여 그 결과를 반환
console.log(Math.round(10.48)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.round(-10.5)); // -10
console.log(Math.round(-10.51)); // -11

// n번째 자리에서 반올림
let num = 123.4567;
console.log(num * 100); // 12345
console.log(Math.round(num * 100)); // 12346
console.log(Math.round(num * 100) / 100); // 123.46

console.log(num.toFixed(1)); // 123.5

// floor(): 소수점 첫 번째 자리에서 소수점을 버림
console.log(Math.floor(10.48)); // 10
console.log(Math.floor(10.5)); // 10
console.log(Math.floor(-10.5)); // -11
console.log(Math.floor(-10.51)); // -11

// ceil(): 소수점 첫번째 자리에서 소수점을 올림
console.log(Math.ceil(10.48)); // 11
console.log(Math.ceil(10.5)); // 11
console.log(Math.ceil(-10.5)); // -10
console.log(Math.ceil(-10.51)); // -10

// random(): 0보다 크거나 같고 1보다 작은 무작위 소수를 반환
console.log(Math.random());
const r = Math.random();
console.log(r);
console.log(Math.ceil(r * 10)); // 1~10 무작위 수
