//let fruits = ["김사과", "바나나", "오렌지"];
/*
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
*/

/*
for (let fruit of fruits) { // for ~ of : fruits 제일 처음 값을 fruit 안에 넣어줌
  console.log(fruit);
}
*/

/*
fruits.forEach(function (fruit, index) {
  console.log(`${index}번째 과일:${fruit}`);
}); // 익명함수 : 이름이 없는 함수
*/

const users = [1, 3.5, true, "김사과", "apple"];
// for 문
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log("....................");

// for..of
for (let user of users) {
  console.log(user);
}

console.log(".....................");

// forEach
users.forEach(function (user, idx, arr) {
  console.log(user, idx, arr);
});
