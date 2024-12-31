let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  let str = "";
  for (let j = 0; j < arr[i].length; j++) {
    sum = i + j;
    str += sum + " ";
  }
  console.log(str);
}
