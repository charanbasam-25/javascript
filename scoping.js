var globalVar = "I am global";

function testScope() {
    var localVar = "I am local";
    console.log(globalVar); // "I am global"
    console.log(localVar);  // "I am local"
}

testScope();
console.log(globalVar); // "I am global"
console.log(localVar);  // Error: localVar is not defined
function blockScopeTest() {
    if (true) {
        let blockVar = "I am block scoped";
        const blockConst = "I am also block scoped";
        console.log(blockVar);   // "I am block scoped"
        console.log(blockConst); // "I am also block scoped"
    }
    console.log(blockVar);   // Error: blockVar is not defined
    console.log(blockConst); // Error: blockConst is not defined
}

blockScopeTest();
function hoistingTest() {
    console.log(a); // undefined
    var a = 10;
    console.log(b); // Error: Cannot access 'b' before initialization
    let b = 20;
}

hoistingTest();
function outer() {
    var outerVar = "I am from outer";
    function inner() {
        var innerVar = "I am from inner";
        console.log(outerVar); // "I am from outer"
        console.log(innerVar); // "I am from inner"
    }
    inner();
    console.log(innerVar); // Error: innerVar is not defined
}

outer();
var x = 100;

function shadowingTest() {
    var x = 50;
    console.log(x); // 50
    if (true) {
        let x = 30;
        console.log(x); // 30
    }
    console.log(x); // 50
}

shadowingTest();
function temporalDeadZone() {
    console.log(a); // undefined
    console.log(b); // Error: Cannot access 'b' before initialization
    var a = 10;
    let b = 20;
    console.log(a); // 10
    console.log(b); // 20
}

temporalDeadZone();
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j); // 0, 1, 2
    }, 1000);
}
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j); // 0, 1, 2
    }, 1000);
}
function blockFunctionScope() {
    if (true) {
        function blockFunction() {
            return "I am block scoped";
        }
    }
    console.log(blockFunction()); // "I am block scoped" (Non-strict mode)
}

blockFunctionScope();
var name = "Global";

function testThis() {
    console.log(this.name); // ?
}

const obj = {
    name: "Object",
    testThis
};

testThis();       // "Global" (global `this`)
obj.testThis();   // "Object" (`this` refers to `obj`)
function variableLeakage() {
    if (true) {
        leakedVar = "I am leaked";
    }
    console.log(leakedVar); // "I am leaked"
}

variableLeakage();
console.log(leakedVar); // "I am leaked"
