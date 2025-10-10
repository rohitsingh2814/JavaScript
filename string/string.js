//---->String ->Sequence of charcters
/*
we create string using " ",' ',``
``->it use or multiline string
string index start from 0 to length-1
if charcter not find it return undefined
*/
let name="Rohit kumar singh";
console.log(name[4]);
console.log("manoj singh"[3]);

// --->String property-only one property
let str="how are you?";
console.log(str.length);

// --->String methods(without argument)
let str2="    javascript is awesome      ";
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());
console.log(str2.trim());//remove leading and trailing space
console.log(str2.trimStart())//remove leading space 
console.log(str2.trimEnd());//remove space from end

//string method(with argument)
let str3="my name is rohit singh";
console.log(str3.includes("rohit"));
//check pass substring is present on string or not return true or false.
//without arugument return false and check case-sensetive.
console.log(str3.indexOf("name"));
//return the index of pass substring otherwise return -1 and also check casesenstive
console.log(str3.replace("my","My"));
//replace passed substring with another passed substring
//replace the first occurence and if we pass subtring not present in string do noting.
console.log( str3.concat("hello ","world "));
//add passed substring accept more than one agument
console.log(str3.replaceAll("my","My"));
//replace all the occourecne
console.log(str3);
const name2="rohit";
//concat is used concateing two or more String
console.log(name2.concat(" kumar ","singh"));
// we also perform by "+" operator
console.log(name2+" kumar "+"singh");
//padStart() is used to hide digit of mobile number and account number 
//similary we have padEnd()
const lastfourdigit="7667";
console.log(lastfourdigit.padStart(10,"*"));
//returns the character od given index
console.log(name2.charAt(2));
console.log(name2[3]); //also used
console.log(name2.charCodeAt(2)); //returns the ASCII values
 const message="hello my name is ram";
 console.log(message.split()); //['hello my name is ram'] convert simple array
 console.log(message.split(" ")); //['hello', 'my', 'name', 'is', 'ram'] split from " ";
 console.log(message.split("a"));//['hello my n', 'me is r', 'm'] split from "a";







