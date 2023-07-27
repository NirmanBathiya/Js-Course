// you must do function in js
//object
// key value pairs in curly bracess

const Myobject ={

    name:"bathiya", // this  is propety
    cars:{
        name:"benz",
        speed:"200"
    },

    action : function(){
        const a =10;
        const b =20;

        const c = a +b;
        console.log(c);
       ` this time for${this.cars.name}`;
    }
}
const Vehicle = {

    wheels : 4,
    start:function(){
          console.log("select the Option");
    },
    pressAstater :function(x){
        x;
    },
    PressBreak : function(y){
            const q = x-y;
    },
    speed:function(){
        console.log("sapped is :"+q);
    }
    



}
console.log(Myobject);
 console.log(Myobject.name);
 console.log(Myobject.cars);
 console.log(Myobject.cars.speed);
 console.log(Myobject["cars"]);
 console.log(Myobject.action);
 console.log(Vehicle.start());
 console.log(Vehicle.pressAstater(20));
 console.log(Vehicle.PressBreak(10));
 console.log(Vehicle.speed);
 //console.log(Vehicle.PressBreak(10));
 //console.log(Vehicle.speed);


  
 