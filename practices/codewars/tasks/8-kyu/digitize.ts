/*
 * Given a random non-negative number,
 * you have to return the digits of this number within an array in reverse order.
 * */

/* Example */

/*
 * 35231 => [1,3,2,5,3]
 * 0     => [0]
 * */

export const digitize = (n: number): number[] => {
  return n.toString().split("").reverse().map(Number);
};

console.log(digitize(35231));
console.log(digitize(0));

export const digitize2 = (n: number): number[] => {
  return [...n.toString()].map(Number).reverse();
};

console.log(digitize2(35231));
console.log(digitize2(0));
