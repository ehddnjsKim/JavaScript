const srp = ["가위", "바위", "보"];
const randomIndex = Math.floor(Math.random() * srp.length);
const pcbox = srp[randomIndex];

const user = "가위";

console.log(`사용자: ${user}`);
console.log(`컴퓨터: ${pcbox}`);

if (pcbox == "가위") {
  if (user == "바위") console.log("결과: 승");
  if (user == "보") console.log("결과: 패");
  if (user == "가위") console.log("결과: 무");
} else if (pcbox == "바위") {
  if (user == "보") console.log("결과: 승");
  if (user == "가위") console.log("결과: 패");
  if (user == "바위") console.log("결과: 무");
} else {
  if (user == "가위") console.log("결과: 승");
  if (user == "바위") console.log("결과: 패");
  if (user == "보") console.log("결과: 무");
}
