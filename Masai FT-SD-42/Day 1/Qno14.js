let toDoList = [
  "Check emails",
  "Complete project",
  "Attend a meeting",
  "Meditate",
  "Plan next day",
];

let newList = [];
let j = 0;
for (let i = 1; i < toDoList.length; i++) {
  newList[j] = toDoList[i];
  j++;
}

newList.length += 2;

for (let i = newList.length - 3; i >= 0; i--) {
  newList[i + 2] = newList[i];
}
newList[0] = "Buy a pen";
newList[1] = "Call the recruiter";
newList[newList.length - 1] = "Book a flight";

console.log(newList);
