// const pers0n: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // const pers0n = {
//   name: 'Me',
//   age: 20,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  Admin,
  ReadOnly,
  Author,
}

const pers0n = {
  name: 'Me',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: Role.Admin,
};

// pers0n.role.push('admin');
// pers0n.role[0] = 10;

let favoriteFoods: string[];
let anyActivities: any[];
favoriteFoods = ['Noodles', 'Fried'];

console.log(pers0n.name);

for (const hobby of pers0n.hobbies) {
  console.log(hobby.toUpperCase());
}

const list = pers0n.hobbies.filter((el) => el === 'Cooking');

console.log(list);
