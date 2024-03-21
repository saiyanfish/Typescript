type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// type ElevatedEmployee = Admin & Employee;
interface ElevatedEmployee extends Employee, Admin {}

const el: ElevatedEmployee = {
  name: 'jj',
  priviledges: ['create-server'],
  startDate: new Date(),
};

// union type
type Combinable2 = string | number;
type Numeric = number | boolean;
type Universal = Combinable2 & Numeric;

function add5(a: number, b: number): number;
function add5(a: string, b: string): string;
function add5(a: number, b: string): string;
function add5(a: string, b: number): string;
function add5(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString();
  if (typeof b === 'boolean') return;
  return a + b;
}

const result = add5('MARK', 'MIKE') as string;
result.split(' ');

const fetchUserData = {
  id: 'u1',
  name: 'tatum',
  job: { title: 'CEO', description: 'My own company' },
};
console.log(fetchUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'Default';
console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name', emp.name);
  if ('priviledges' in emp) console.log(emp.priviledges);
  if ('startDate' in emp) console.log(emp.startDate);
}

let User: Admin = {
  name: 'me',
  priviledges: ['all'],
};

printEmployeeInformation(User);

class Car {
  drive() {
    console.log('Driving !!');
  }
}

class Truck {
  loadCargo(amount: number) {
    console.log('Loading cargo....' + amount);
  }
  drive() {
    console.log('driving a truckk !!!!');
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle) vehicle.loadCargo(20);
  if (vehicle instanceof Truck) vehicle.loadCargo(20);
}

useVehicle(v2);
useVehicle(v1);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log(`animal runs in ${speed} km/hr`);
}

moveAnimal({ type: 'horse', runningSpeed: 20 });

// const userInputElement = document.getElementById(
//   'user-input',
// )! as HTMLInputElement;

// userInputElement.value = 'hello !';

interface ErrorContainer {
  [pop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email !',
  username: 'Must start with a capital name',
};
