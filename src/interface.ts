// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add4: AddFn;
add4 = (a, b) => {
  return a + b;
};

// interfave != type
interface Named {
  readonly name?: string;
  outputName?: string;
}

// interface can extends multiple interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    if (this.name) console.log(`${phrase}:${this.name}`);
    console.log('hi');
  }
}

let user1: Greetable;
user1 = new Person('json');
// user1.name ='s';

// console.log(user1.name);
