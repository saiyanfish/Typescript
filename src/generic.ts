const names: Array<string> = [];
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done !!');
//   }, 3000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U>(obja: T, objb: U) {
  return Object.assign(obja, objb);
}
const mergeObj = merge<{ name: string }, { age: number }>(
  { name: 'max' },
  { age: 30 },
);
console.log(mergeObj.age);

type Lengthy = {
  length: number;
};

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndPrint([1, 4, 5]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return obj[key];
}

class Storage2<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new Storage2<string>();
textStorage.addItem('max');
textStorage.addItem('macx');
textStorage.addItem('macfx');
console.log(textStorage.getItems());

const numberStorage = new Storage2<number>();
// numberStorage.addItem(3);

const objectStorage = new Storage2<object>();
objectStorage.addItem({ name: 'ssdfkef' });
objectStorage.addItem({ ddd: 'ddd' });
console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date,
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.completeUntil = date;
  courseGoal.description = description;
  courseGoal.title = title;
  return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ['MAx', 'anna'];
// names2.push('sss')
