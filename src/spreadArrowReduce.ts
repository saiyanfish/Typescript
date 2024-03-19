const userName = 'max';

// let age = 30;

const printOutput: (a: number | string) => void = (outpout) => {
  console.log(outpout);
};
const printOther: (c: boolean | string) => void = (out) => {
  console.log(out);
};

const add3 = (a: number, b: number = 1) => a + b;

add3(2, 4);

const hobbies = ['Sports', 'Cooking', 'ff', 'gg'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  realName: 'sss',
  age: 20,
};

const person1 = { ...person, images: 'none' };
console.log(person1);

const addNum = (...numbers: number[]) => {
  // let rs = 0;
  // numbers.forEach((el) => {
  //   rs += el;
  // });
  // return rs;
  return numbers.reduce((curRs, curValue) => {
    return curRs + curValue;
  }, 0);
};

const minus2 = (...numbers: number[]) => {
  return numbers.slice(1).reduce((currentRs, currentVal) => {
    return currentRs - currentVal;
  }, numbers[0]);
};

const addNumbers = console.log(addNum(1, 35, 68, 8));
const left: number = minus2(10, 4, 1);
console.log(left);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies);

const { realName: uName, age } = person;
