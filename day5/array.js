const enpt=[]
const enpt1=[a,s,d,d,f,s]
console.log(enpt.length)
console.log(enpt1[0])
console.log(enpt1[enpt1.length-1])
console.log(enpt1[enpt1.length/2])
const mixedDatatype=[Text,true,"true",4.3,6,7,8,9,10];
const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
console.log(itCompanies)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length-1])
itCompanies.map((value)=>console.log(value))
"Facebook" in itCompanies?console.log("True"):console.log("False")
itCompanies.sort()
itCompanies.reverse()
itCompanies.slice(0,3)
itCompanies.slice(-1,-3)
itCompanies.slice(itCompanies.length/2,itCompanies.length)
itCompanies.remove(itCompanies.length-1)
itCompanies.remove(0)
itCompanies.remove()
