const user = [1, 3.5, true, "김사과", "apple"];
console.log(user);
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);

user[7] = "여자";
console.log(user);

user[4] = "banana";
console.log(user);
console.log(user.length);

for (let i = 0; i <= 7; i++) {
  //가독성 떨어짐, 확장성 떨어짐
  console.log(user[i]); // i < user.length로 변경
}

console.log("....................");

// push(): 배열의 요소를 추가
user.push("ISTJ");
console.log(user);

// pop(): 배열의 마지막 인덱스 번호에 있는 값을 제거
let temp = user.pop(); // user.pop(); 삭제 가능.단 뭐가 삭제되는지 알 수 없음
console.log(user);
console.log(temp);

// shift(): 배열의 첫번째 인덱스 번호에 있는 값을 제거
temp = user.shift();
console.log(user);
console.log(temp);

// concat(): 두 배열의 요소를 합침
const profile = ["A형", "ISTJ"];
result = user.concat(profile);
console.log(result);

// join(): 배열 요소 사이에 원하는 문자를 삽입: 배열 -> 문자열
result = user.join("🚗");
console.log(result);
console.log(typeof result);

// sort(): 배열의 요소를 오름차순
const arr = ["apple", "banana", "Apple", "orange", "melon"];
arr.sort();
console.log(arr);

// reverse(): 배열을 역순으로 재배치
arr.reverse();
console.log(arr);
