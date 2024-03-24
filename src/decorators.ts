function Logger(logString: string) {
  console.log('Logger');
  return function (constructor: Function) {
    console.log(logString); // Log the provided string
    console.log(constructor); // Log the constructor function
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('template');
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T,
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

function Log(target: any, propertyName: string | Symbol) {
  console.log('PROPERTY DECORATOR !');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Access decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string, positon: number) {
  console.log('params decorator');
  console.log(target);
  console.log(name);
  console.log(positon);
}

@Logger('LOGG')
@WithTemplate('<h1>my person object</h1>', 'app')
class People {
  name = 'Max';

  constructor() {
    console.log('dd');
  }
}

const P1 = new People();

class Product {
  @Log
  title: string;
  private _price: number;
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
      return;
    }
    throw new Error('Invalid price - should be positive !!');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const oirginMetohs = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = oirginMetohs.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = 'This works';
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
const printer = new Printer();

const button1 = document.querySelector('button')!;
button1.addEventListener('click', printer.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validateableProp: string]: string[]; //['required','positive]
  };
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, proName: string) {
  registeredValidators[target.constructor.name] = {
    [proName]: [
      ...(registeredValidators[target.constructor.name]?.[proName] ?? []),
      'required',
    ],
    ...registeredValidators[target.constructor.name],
  };
}
function PositiveNumber(target: any, proName: string) {
  registeredValidators[target.constructor.name] = {
    [proName]: [
      ...(registeredValidators[target.constructor.name]?.[proName] ?? []),
      'positive',
    ],
    ...registeredValidators[target.constructor.name],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      console.log(validator);
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;

  const createCourse = new Course(title, price);
  if (!validate(createCourse)) {
    alert('gg');
    return;
  }
  // console.log(createCourse);
});
