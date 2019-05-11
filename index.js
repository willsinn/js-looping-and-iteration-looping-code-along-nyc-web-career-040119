// Code your solutions in this file
function writeCards(names, event) {
  let counter = 0;
  let namesArr = [];
  for (let i=0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    namesArr.push(message)
    counter++;
  }
  return namesArr;
  }

function countdown(num) {
  let count = num;
  while (count > 0) {
    console.log(count);
    count--;
  }
  console.log(count);
}
