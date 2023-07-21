//  if statment

let number=91;
let reply;
let Myname = "nirman";

if(number>=80){

    var count =number;
    if(count==90){
        reply = `you marks are grate good luck ${Myname}`;
    }
    else if (count==95) {
        reply = "nirman";

    } else {
        
      reply="good day";
    }

}

console.log(reply);

// swich statment

switch (3){

    case 1:
        console.log("Nirman");
        break;

    case 2:
        console.log("Bathiya");
        break;
    
    default:
        console.log("Rathnayaka");
}

// ternary operation

//let soop = "chicken noudle soup";
//let response = soop ? "Yes,we have soup." : "Sorry,no soup today.";

//console.log(response);

let soop = "chicken noudle soup";
let  iscustomerbanned = true;
let soupAccess = iscustomerbanned ? "Sorry no soup for you.Thanq !!.." 
: soop ? `Yes. we have ${soop} today.`:"Sorry no soup today.";

console.log(soupAccess);

// Game

let plyer01 = "paper";
let plyer02 = "paper";

let winner = plyer01 == plyer02 ? "Equel" 
: plyer01 == "rock" && plyer02 == "scissors" ? "plyer02 is winner.."
: plyer01 == "paper" && plyer02 == "rock" ? "plyer01 is winner.."
: plyer01 == "paper" && plyer02 == "scossor" ? "plyer01 is winner.." 
: "plyer02 is winner";
console.log(winner);


/*
   let app = alert("nirman bathiya");

   // use input
   console.log(app);
  let myboolean =confirm("Ok==true \ncancel==false");
  console.log(myboolean);  */

  let Name = prompt("Enter you aye name..");
  console.log(typeof Name);
 console.log(Name ?? "you did not enter you are name..");



 if(Name){
    console.log(Name.length);
    console.log(Name.trim().length);
    console.log(Name.trim());
 }else{
    console.log("you did not enter name.");
 }

    