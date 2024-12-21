let programmingLanguagues = ["Java", "Python", "JavaScript", "Assembly"];

programmingLanguagues.pop(); // remove o último elemento do array.
programmingLanguagues.shift(); // remove o primeiro elemento do array.

let programmingLangString = programmingLanguagues;

programmingLangString.push("Assembly");

console.log(programmingLanguagues);
console.log(programmingLangString.join('\n'));
