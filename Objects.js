const a= {};

// creating the keys in the object;
a.city= "Delhi";
a.Salary=500000;
a.name= "Varun";
console.log(a,"a------------");

const b={};

// b[city]= "Delhi"; // gives undefined---- 
// b[Salary]= 5000000; // gives -- undefined----
// b[name]= "Varun"; // gives --undefined---
// console.log(b,"b-------") 
let arr= [1,2];
let arr1= [3,4]
const c= {}
c.arr= "Checks as property o object";
c[arr1]= "Evaluates teh values of Array and converst it to stirngs";
console.log(c,"c--object with ----- values of array");


// Dot Notation (b.city):

// Always treats city as a literal string key ("city").
// Used for static property names.
// Example: b.city = "Delhi"; → Adds a key "city" with value "Delhi".
// Bracket Notation (b[city]):

// Evaluates the expression city to determine the key.
// Used for dynamic property names.
// If city is a variable, its value is used as the key. If city is undefined, it may throw an error or add the key "undefined".
// Example: b[city] = "Delhi"; → Adds a key based on the value of city.
// Key Conversion:

// Keys in JavaScript objects are always strings or symbols.
// Non-string keys (like numbers) are automatically converted to strings.
// Example: b[1] = "value"; → Adds "1": "value" to the object.


// Type coercion (automatic conversion of non-string keys to strings).
// Object keys are always strings or symbols,

const Obj1 = {};
// Defining the "name" property
Object.defineProperty(Obj1, "name", {
    value: "charan",   // actual value
    writable: true,    // can assign a new value
    enumerable: false,  // can be enumerated in for loop
    configurable: true // can be modified, deleted
});

// Defining the "age" property
Object.defineProperty(Obj1, "age", {
    value: 30,         // actual value
    writable: true,    // can assign a new value
    enumerable: true,  // can be enumerated in for loop
    configurable: true // can be modified, deleted
});
console.log(Obj1,"object1-------")
// only enumerable keys can be got
console.log(Object.keys(Obj1),'object1 enumberable keys-----');
// it gets all the properties of the object including the non- enumerable one;
console.log(Object.getOwnPropertyNames(Obj1),"object1----- non enumerable keys as well")
// only enumerable values can be got
console.log(Object.values(Obj1),'object1 values-----')
// all the enumerable propety pairs can be accesd
console.log(Object.entries(Obj1),"entriesof object-----");
// it get he descrip[tion of the object]
console.log(Object.getOwnPropertyDescriptor(Obj1,"name"),"propertydescriptoir------");

console.log(Object.getPrototypeOf(Obj1),"proptotype-----")

//creating oir own prototype for the Objects
const proto={};
const newObject=Object.create(proto,{greet:{
    value:function(){
        console.log("---hello------")
    },
    writable:true,
    enumerable:true,
    configurable:true,
}});
newObject.greet();

console.log(Object.entries(newObject),"enries of new Object whch has only methods")
// prototyp[e of newObject is set to the Obj1;
Object.setPrototypeOf(Obj1,newObject);
Obj1.greet()
console.log(Obj1.hasOwnProperty("greet"),Obj1.hasOwnProperty("name"),"check if it has own actual property---")
console.log(Obj1.toString(),"converted to string");

// cloning all the enumerable properties from one objec to other object
const assign1= {
    name:"charan",
    age:27,
}
const assign2= {
    degree:"btech",
    job:"sw"
}
Object.assign(assign1,assign2);
console.log(assign1,"assign1-----");
console.log(assign2,"assign2----");

// all the enumerable keys of the object can be accessed.
console.log(Object.keys(assign1),"object--keys---");

const School1={
    name:"sri vani",
    area:'tadipatri',
    branches:{
        city1:"Tadipatri",
        city2:"Anantapur",
        city3:"Hindupur",
    },
    ranks:[1,2,3,5],
}
const School2={
    name:"Sai Vijetha",
    area:'tadipatri',
    branches:{
        city1:"Tadipatri",
        city2:"Anantapur",
        city3:"Hindupur",
    },
    ranks:[1,2,3,5],
}

// cannot modifiy the properties of these values;
Object.freeze(School1);
School1.area="anantapiram";// as it is frozen we cannot modify the outer layer properties of object;
School1.medium="English"; // we cannot add the properties tot he object as it is freezed;
School1.branches.city1="dharmavaram"; //we can chamge the properties of the inner object; 
delete School1.name; // we can modify when we freeze
console.log(School1,"school1-----")

Object.seal(School2);

School2.area="Hyderabad"; // in seal we can modifyt eh valeus of the keys 
School2.number= 56000; // we can't add new properties to the object in seal
console.log(School2,"shcool2---");
console.log(NaN=== NaN,"value of noraml ---nan----");
console.log(Object.is(NaN,NaN),"actualll --NaN----");
console.log(0=== -0,"value normal -conmapre-----")
console.log(Object.is(0,-0),"actualll --000----");
console.log(Object.is(25,25),"actualll --numer compare----");