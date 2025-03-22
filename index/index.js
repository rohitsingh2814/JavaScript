console.log(`hello world`);
console.log(`i like pizza`);

window.alert(`hello`);
 
document.getElementById("myh").textContent="Hello";
document.getElementById("myp").textContent="I like pizza!";

//------->datatypes
/*
->primitive
->non-primitive
=>7 primitive
1.number
2.string
" ",'', ``-for multiline
string to number -> +"100" or -"100" or parseInt("100hdhs")
number to string ->100+" "
3.boolean
4.undefined
5.null
6.bigint
7.symbol
*/

//this is comment
/* this multi line comment */

//-------->variable =A container that stores a value .
//                     Behaves as if it were the value it contains
 //1.declartion let x;
 //2.assignment x=100;
 /*
 1.let->we reassign it
 2.var->available out side block but not let 
 3.const->we not reassign it .create error,inialliaze first 
 */
  let age=25;
  let price =10.99;
  let gpa=2.1;
  console.log(age);
  console.log("my age is "+age);
  console.log(`you are ${age} years old`);
  console.log(`the price is $${price}`);
  console.log(`the gpa is: ${gpa}`);
  console.log(typeof gpa);//to check data type;
   
  let firstname="Rohit";//string -Sequence of charater
  let email="rohitsingh7667142299@gmail.com";
  console.log(typeof firstname);
  console.log(`you name is ${firstname}`);
  console.log(`your email is ${email}`);

let online=true; //boolean
console.log(typeof online);
console.log(`rohit is online:${online}`); 
//for html
let name="Rohit singh";
let age1=20;
let status=true;
document.getElementById("name").textContent=`My name is ${name}`;
document.getElementById("age").textContent=`I'm ${age1} olds`;
document.getElementById("status").textContent=`Status: ${status}`;
 /*
 ---->rules for naming variables
 A variable contain any for the following characters but must not start with a digit.
 ->capital Letters
 ->small leatter
 ->digits
 ->only two special charcters $ 0r _
 ->Camelcase
 */
 //---->how code running line by lib=ne in javaScipt
 //first phase memory creation phase create all variable with  undefined value in memory
 //code Execution phase assign actual value and datatypes
 var first_name="Akash";
 let last_name="Singh";
 let age2=25;
 const yearofBirth=1999;
  let userInfo =`Hi my name is`+first_name+' '+last_name;


