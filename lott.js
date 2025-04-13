let lotto = [];

while (lotto.length < 6) {
  let n = Math.floor(Math.random() * 45) + 1;

  if (!lotto.includes(n)) {
    lotto.push(n);
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 6; j++) {
    if (lotto[i] > lotto[j]) {
      let t = lotto[i];
      lotto[i] = lotto[j];
      lotto[j] = t;
    }
  }
}

console.log("로또 번호:");
for (let i = 0; i < 6; i++) {
  console.log(lotto[i]);
}
