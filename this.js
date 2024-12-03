// this in node js is different from this in browser
// this in node js is belongs to that particualr file global
// this in browser belongs to entire window object;

console.log(this,"this--in--noejs")
console.log(module.exports,"same --as --this");
function saved(){
    console.log(this,"this-----has all the global methods accesable ")
}

saved();

const obj1={
    name:"cahran",
    method:function(){
        console.log(this.name,"this--------- context of Obj1");
    }
}
obj1.method()
const newObject= obj1.method;
newObject();

function noramlFunction(){
    console.log(this,"this------Normal Function")
}
noramlFunction();

const arrowFunction =()=>{
    console.log(this,"Arrow--function this-----");// takes the context of lexical scope;
}
arrowFunction();

const Obj4={
    name:"alice",
    age:()=>{
        console.log(this,"this------in arrow---takes the lexaical soope")
    }
}

Obj4.age()
const Obj5={
    name:"alice",
    age:function(){
        console.log(this,"this------scope of obj5--as--it is normal funciton");
    }
}

Obj5.age();

const Obj6={
    name:"cahran",
    age:{
        actualname:'bioage',
        number:function(){
            console.log(this,this.name,this.actualname,"this-----normal nexted funtion");
        }

    }
}

Obj6.age.number()

const Obj7={
    name:"cahran",
    age:{
        actualname:'bioage',
        number:()=>{
            console.log(this,"this-----");
        }

    }
}

Obj7.age.number.bind(Obj7)();
Obj6.age.number.bind(Obj6)();// here ithe name frpom Obj6 is taken istead of age obj 


'use strict';

const obj = {
  name: 'Alice',
  greet: function() {
    // Using a regular function instead of an arrow function
    function regularGreet() {
      console.log(this.name,"This--in_regular-fnctions----"); // `this` is dynamically determined based on how it's called
    }
    regularGreet();
  }
};

obj.greet(); // Outputs undefined in strict mode because `this` will refer to `undefined`

// Arrow functions do not have their own this, so they inherit it from the surrounding scope. In this case, the surrounding scope is the greet method, which is part of the obj object.
// Regular functions create their own this, which can vary depending on the call context. In the case of regularGreet(), since it's called as a regular function (not a method of an object), this is determined dynamically.

const obj9 = {
    name: 'Alice',
    greet: function() {
      // Using a regular function instead of an arrow function
       regularGreet=()=> {
        console.log(this.name,"this.AROW-FUNCTION"); // `this` is dynamically determined based on how it's called
      }
      regularGreet();
    }
  };
  
  obj9.greet(); // to make the regular function above workas arrow fnciton use the bind , call or apply 

  const obj00 = {
    name: 'Alice',
    greet: function() {
      // Using a regular function instead of an arrow function
      function regularGreet() {
        console.log(this.name, "This--in_regular-fnctions----"); // `this` refers to `obj`
      }
      
      // Calling regularGreet as a method of obj using .call() to explicitly set `this`
      regularGreet.call(this);  // `this` inside greet will refer to obj, so `this.name` will be 'Alice'
    }
  };
  
  obj00.greet();  // Outputs: Alice This--in_regular-fnctions----
  