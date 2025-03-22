//------>dialogbox
 /*
 There are three types of dialbox
 ->alert("your maessage");
     we have single button 'ok' and return undefined;
 ->confirm("your message goes hers");
     we have two buttons 'ok' or 'cancel' return true or false
     we alse stored it return value in variable;
 ->prompt("your message here");
     we have one input bux in it, if click ok return the enter value or if click
     on cancel it return null
     we also stored it return value
 */
 alert("your maessage");
 let status=confirm("your message goes hers");
 console.log(status); 
 let name=prompt("enter your name");
 console.log(name);
 document.getElementById("name").textContent=name;
