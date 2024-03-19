console.log('Your code here .....');
function add2(a: number, b: number, showResult: boolean) {
  if (typeof a !== 'number' || typeof b !== 'number') console.log('error');
  if (showResult) return 0;
  return a + b;
}

const printResult: boolean = true;
console.log(add2(1, 4, printResult));
