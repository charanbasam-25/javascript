console.log(a);
console.log(sum(1,2)); // sum is hosited wit the undnied and we cannot call the undefined hence the type error
console.log(total(5,600));// this gives 605;  beacause function decleration are hosited bot the refernce and defination.
var a=20;
console.log(a)

console.log(b);
let b=0;
console.log(b);

function total(a,b){ return a+b;}
var sum= function(a,b){
    return a+b
}

