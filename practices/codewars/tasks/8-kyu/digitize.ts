/*
 *
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
