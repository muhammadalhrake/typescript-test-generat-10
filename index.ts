// Import stylesheets
import './style.css';
import random from 'random'
function between(min: number, max: number) {
  return random.int(min, max);
}
//test of generate
function test(array: Array<number>) {
  let sum = 0;
  let testOn: Boolean;
  for (let c = 0; c < array.length; c++) {
    sum = sum + array[c];
  }
  if (sum > 10) {
    testOn = true;
  }else{
    testOn=false
  }
  console.log(testOn)
}
//genrrate random number with specific number of digits
function generate(digitsNum: number) {
  let range = 11,
    first :number;
  if(digitsNum==2){
    first=between(2,9)
  }else{
    first=between(1,9)
  }
  let arrayOfNum = new Array();
  arrayOfNum.push(first);
  for (let i = 1; i < digitsNum; i++) {
    let numWeHave = range - first;
    if (i == (digitsNum-1)) {
      if (numWeHave >= 0) {
        let sum = between(numWeHave, 9);
        arrayOfNum.push(sum);
      } else {
        let sum = between(0, 9);
        arrayOfNum.push(sum);
      }
    } else {
      let sum = between(0, 9);
      arrayOfNum.push(sum);
      numWeHave = numWeHave - sum;
    }
  }
  return arrayOfNum;
}
let testing=generate(2)
console.log('Hello');
/* setInterval(() =>test(generate(between(2,9))), 500); */
/* setInterval(() => console.log(generate(3)), 500); */
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;