let userInput: unknown;
let userNaME: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userNaME = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occur', 500);
console.log(result);

let logged;
function goAndAal(data: string) {
  console.log(data);
  logged = true;
  console.log(logged);
}

function clickHandler(message: string) {
  console.log(message);
}

const button = document.querySelector('button')!;
button.addEventListener('click', clickHandler.bind(null, 'ssss'));
