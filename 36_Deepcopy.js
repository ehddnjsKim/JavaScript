function deepCopy(value) {
  // 원시값은 그대로 반환
  if (typeof value !== "object" || value === null) {
    return value;
  }

  // 배열일 경우
  if (Array.isArray(value)) {
    // is메서드 : 결과 true or false
    const result = []; // 배열 생성
    for (let i = 0; i < value.length; i++) {
      // 배열의 길이만큼 반복
      result[i] = deepCopy(value[i]); // 길이만큼 i값 증가. 자기가 자기를 부르는 함수(재귀함수)
    }
    return result;
  }

  // 객체일 경우
  const result = {}; // 빈 객체 생성성
  for (let key in value) {
    result[key] = deepCopy(value[key]); // 객체 생성
  }
  return result;
}

const original = {
  name: "오렌지",
  scores: [90, 80, 100],
  address: {
    city: "서울",
    zip: "12345",
  },
};

const copy = deepCopy(original);
copy.name = "김사과";
copy.scores[0] = 70;
copy.address.city = "부산";

console.log(original.name);
console.log(original.scores);
