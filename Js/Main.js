console.log("hellow");
console.log("Nirman");
console.log(typeof "22");
console.log( typeof "BAthiya");
console.log( typeof true);


//string

const Myname = "nirman bathiya";
 
console.log(Myname.length);
console.log(Myname.charAt(1));
console.log(Myname.indexOf("ba"));
console.log(Myname.slice(3,10));
console.log(Myname.slice(10));
console.log(Myname.includes("nir"));  // true or false
console.log(Myname.split("e"));
console.log(Myname.split(""));
console.log("nirman,bathiya,rathnayaka".split(",")); //e or , or nothing


// number

 const number1 = 42;   // this is int data type.  
const myfloat = 42.01;  // this is a float data type.
const myString ="42.01345abcd";  // this is string data type.
console.log(myfloat);
console.log(myfloat >myString);
console.log(myfloat == myString);  // data type are defferent.
console.log(number1 == myString);   //  int data type and string data type.
console.log(number1 == myfloat);   // that is true  becuse  data type are same in the java script.
console.log(myString + 2);   // this is a string cannot  add the number 
console.log(Number(myString) + 3);
console.log(Number(myString) == number1);
console.log(Number("bathiya"));
console.log(Number(undefined));

// Integer method

console.log(Number.isInteger(number1));
console.log(Number.isInteger(myString));
console.log(Number.isInteger(myfloat));
console.log(Number.parseFloat(myString).toFixed(1)); // how meny floating value are need.
console.log(Number.parseInt(myfloat));


// tostring

console.log( typeof myfloat.toString());
console.log(typeof Number.parseFloat(myString));

console.log(Number.parseFloat("23.9078acbd").toFixed(4).toString());



// math Method and properties

const nirman = 12345;

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));         // pyrna sankayawakat watayanwa.
console.log(Math.ceil(3.3));     // vishalathama purna sankayawa labadee....Returns the smallest integer greater than or equal to its numeric argument
console.log(Math.floor(3.3));  //kudama purna sankayawa labadee.
console.log(Math.pow(2,2));    // gunakara labadee....
console.log(Math.min(2,0.4,1));
console.log(Math.max(2,0.4,1));


console.log(Math.floor(3.7));



console.log(Math.floor(Math.random()* 10) );
const Name = "Bathiya";

  console.log(Name.charAt(Math.floor(Math.random()* Name.length)));  // do this again and again
  //console.log(Name.length);


// name.lenght  and name.chart are get a different meanins..

