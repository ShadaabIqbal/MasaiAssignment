let scores = [40, 10, 35, 78, 95, 55, 80, 27, 15, 92];
let count = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    scores[i] += 20;
  } else if (scores[i] > 90) {
    scores[i] = 90;
  }
  if (scores[i] >= 50) {
    count++;
  }
}

console.log(`${count} students passed 50 or more`);
console.log(scores);


