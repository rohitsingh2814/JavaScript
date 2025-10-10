//arithmetic operators =operands(valuses,variable,etc)
//                      operators(+,-,*,/)

let students=30;
students=students+1;
students=students-1;
students=students*2;
students=students/2;
students=students **2;
let extrastudent=students%3;

//assigmnment opertors;
students+=1;
students-=1;
students*=2;
students/=2;
students**=2;
students%=3;
//incremt and decrement;
students++;
students--;
console.log(students);

/*
operotors precedence
1.parenthesis()
2.exponents
3.multipliction & division & module
4.addition and subtration
*/
let result=1+2*3**2-1;
console.log(result);

//comparison operators
console.log(7>'7') //it auto change the datatype //false
console.log(7<3)//false
console.log(7<=3)//false
console.log(7>=3)//true

console.log(7=='7') //true , it is loosly equal only check value
console.log(7!='7')

console.log(7==='7') //false, it is strictly equal to check value and datatype both
console.log(7!=='7')


//logical opertors
//falsey=undefined,null,0,false,Nan
//truty=all others are falsy
console.log(23&&23)  //all true and return truty and falsy
console.log(23||0) //one or all true and return truty and falsy
console.log(!0)  //if true gives false and vice versa

const userAge =21;
const isCollegeStudent =(userAge>=18)&&(userAge<=24);
const isSchoolStudent=(userAge>=5)&&(userAge<=18);
const isStudent =isSchoolStudent||isCollegeStudent;
//"rohit" && "rahul" =>'rahul'
//"rohit"||"rahul"=>'rohit'
//""&&"rohit"=>""

//bitwise operators
//(And)&
//(or)|
//(not)~
//(right shift)>> 
//(left shift)<<
//(Xor)^







