//operator=> +,-,/,%,**
//Math Object
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.pow(2,6)) //returns power 64
console.log(Math.sqrt(16)) //returns square root of given number; 4
console.log(Math.floor(2.999)) //remove decimal 2
console.log(Math.floor(2.999999999999999999)) //3 js automatic converts the large dicimal to next perfect numaber
console.log(Math.ceil(2.01)) //next perfect number 3
console.log(Math.round(2.1)) //rounding the number
console.log(Math.floor(Math.random()*20)); //generate ramdom between(0 to 19)
console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10)) //between 10 to 20
const length=prompt("enter the lenght");
const breath=prompt("enter the breath");
document.write(`The Area of rectangle is: ${length*breath}`)
//lenght + breath it returns '85';
//+lenght + +breath it return 13 starting + sign for type casting

console.log(8/0) //infinity
console.log(-8/0)  //-infinity
console.log(0/0) //NaN( not a number)
//infinity,-infinity,NaN all are typeof number



