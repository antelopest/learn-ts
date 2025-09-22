/*
 * Consider an array/list of sheep where some sheep may be missing from their place.
 * We need a function that counts the number of sheep present in the array (true means present).
 * */

/* Examples */

/*
 [true,  true,  true,  false,
  true,  true,  true,  true,
  true,  false, true,  false,
  true,  false, false, true,
  true,  true,  true,  true,
  false, false, true,  true]

  => 17
 * */

/*
 * Hint: Remember to check for bad values like null/undefined
 * */
export function countSheeps(
  arrayOfSheep: (boolean | null | undefined)[],
): number {
  return arrayOfSheep.filter(Boolean).length;
}

let test = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

let test1 = [null, true, false, undefined];

console.log(countSheeps(test));
console.log(countSheeps(test1));
