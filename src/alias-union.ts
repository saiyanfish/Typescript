type Combinable = number | string;
type ConversionDescriber = 'as number' | 'as text';

function combine1(
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriber,
) {
  let result;
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resultConversion === 'as number'
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  // if (resultConversion === 'as number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

console.log(combine1('20', '4', 'as number'));
console.log(combine1('Main', 4, 'as text'));
