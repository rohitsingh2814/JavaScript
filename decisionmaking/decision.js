const username=prompt("Enter Your Name") ||"Rohit Singh";
const userage=parseInt(prompt("enter your Age")) ||22;
//+ and parseInt to convert it in number
 if(!username){
    username="Anurag Singh";
 }
 console.log(`Name: ${username}`)
 console.log(`Age: ${userage}`)
// if(userage>=0 && userage<=5){
//     console.log("user is a child")
// }
// if(userage>=5 && userage<=18){
//     console.log("user is a School student")
// }
// if(userage>=18 && userage<=24){
//     console.log("user is a college Student")
// }
// if(userage>=24 && userage<=60){
//     console.log("user is a working profeesional")
// }
/* only if check all the posibiltiy it not stop 
after one execution so we use else if or else */
if(userage>=0 && userage<=5){
    console.log("user is a child")
}
else if(userage>=5 && userage<=18){
    console.log("user is a School student")
}
else if(userage>18 && userage<=24){
    //nested if
    if(userage>21){
        console.log(" he is above 21");
    }else{
        console.log("he is not adove 21");
    }
    console.log("user is a college Student")
}
else if(userage>=24 && userage<=60){
    console.log("user is a working profeesional")
}
else {
    console.log("user is a old man")
}
/* it check condition if true the excute the block
 end the program otherwise check else if then else */

 //switch case statement is a control flow statement that allows you to execute different blocks of code based on the value of an expression.
 //switch check of strictly equal to condition
 const day=2;
 switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("invalid");
    
 }
 
 //switch using condition 
 switch(true){
    case (userage>=0 && userage<=5):
        console.log("user is child");
        break;
    case (userage>=5 && userage<=18):
        console.log("user is a School student")
        break;
    case (userage>18 && userage<=24):
        console.log("user is college student");
        break;
    case (userage>=24 && userage<=60):
       console.log("user is a working profeesional")
       break;
    default:
        console.log("user is old man");
 }

 //ternary operator 
 const gender='F';
 const usermessage=`${gender.toLowerCase()==='f'?"she":"he"} is college student`;
 console.log(usermessage);

 //nested ternary operator
 const grade='c';
 const remarks=grade==='a'?"outstanding":grade==='b'?"excellent":grade==='c'?"good":grade==='d'?"average":"fail";
 console.log(remarks);

