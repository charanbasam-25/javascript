const a="Charan";
const b=10;
const c=[1,2,3,4];
const d= {1:23,2:33,3:55};
const e= {"1":23,"2":33, "3":55}
const f= String([1,2]);


console.log(typeof(a),"type--of-a--");
console.log(typeof(b),"type--of-b--");
console.log(typeof(c),"type--of-c--");
console.log(typeof(d),"type--of-d--");
console.log(typeof(e),"type--of-e--");
console.log(typeof(f),"type--of-f--");

// note typeOf  can only be user full for checking the type of the primitive datatypes,
// if we need to check the actuall data types of the values we need to use the object protoptypes below

function returnType(value){
    return Object.prototype.toString.call(value);
}

console.log(returnType(a),"actualType----a---");
console.log(returnType(b),"actualType----b---");
console.log(returnType(c),"actualType----c---");
console.log(returnType(d),"actualType----d---");
console.log(returnType(e),"actualType----e---");
console.log(returnType(Object.keys(d)[0]),"Keys of the object---always the string-----") // note acttually given as number in example
console.log(returnType(Object.keys(e)[0]),"Keys of the object---always the string-----") // note actually given as string only
console.log(returnType(f),"actualType----f---");
console.log(Object.prototype.toString.call(function returnType(value){
    return 2
}),"value--of-funciton-----"); 
