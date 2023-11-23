var one= '30 Days Of JavaScript';
console.log(one);
console.log(one.length);
one.toUpperCase();
one.toLowerCase();
one.substring(0, 1);
one.slice(3,one.length);
console.log(one.includes('Script'));
var two=one.split();
one.replace("30 Days Of JavaScript","30 Days Of Python");
console.log(one.charAt(5));
console.log(one.indexOf("a"));
console.log(one.lastIndexOf("n"));
var exaple="You cannot end a sentence with because because because is a conjunction'";
console.log(exaple.indexOf("because"));
console.log(exaple.lastIndexOf("because"));
console.log(exaple.search("because"));
one.trim();
console.log(one.startsWith("30"));
console.log(one.endsWith("course"));
console.log(one.match(/a/g));
var part1="Python";
var part2="is";
console.log(part1.concat(" ",part2," ",one));
console.log(one.repeat(2));



