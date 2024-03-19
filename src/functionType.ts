function add(n1: number, n2: number): number {
  return n1 + n2;
}
function printRs(num: number): void {
  console.log('result: ' + num);
}

let times: (a: number, b: number) => number;

times = (a, b) => {
  return a * b;
};

printRs(30);
console.log(times(30, 4));

function addHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addHandle(1, 4, (result) => {
  console.log(result);
});

function sendR(data: string, cb: (res: any) => void) {
  return cb({ data: 'i m here' });
}

console.log(
  sendR('Me', (res) => {
    return true;
  }),
);
