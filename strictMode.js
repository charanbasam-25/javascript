// "use strict";
console.log(this,"this---") // this is exectued as window in browser but it is empty in node
// In Node.js, the global context of a file is the module itself, and this refers to the module’s exports object.
// In browsers, global scripts are executed in the context of the global window object, so this refers to window.
function strictModeOne(){
    var x=0;
    console.log(this,"this----in- strict-mode----");
}

strictModeOne();

