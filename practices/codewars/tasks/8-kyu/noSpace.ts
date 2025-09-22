/* Examples */

/*
 * "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
 * "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
 * "8aaaaa dddd r     " -> "8aaaaaddddr"
 *  */
export function noSpace(x: string): string {
  return x.replaceAll(" ", "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r     "));

export function noSpace2(x: string): string {
  return x.replace(/\s/g, "");
}

console.log(noSpace2("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace2("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace2("8aaaaa dddd r     "));

export function noSpace3(x: string): string {
  return [...x].reduce((acc, char) => {
    return char === " " ? acc : acc + char;
  }, "");
}

console.log(noSpace3("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace3("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace3("8aaaaa dddd r     "));
