let n = 5;

let i = 1;

while (i <= n) {
  let str = "";
  if (i == 1 || i == n) {
    let j = 1;
    while (j <= n) {
      str += "*";
      j++;
    }
  } else {
    str += "*";
  }
  i++;
  console.log(str);
}
