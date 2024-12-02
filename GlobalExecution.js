console.log("Start");

function global(){
    var g=0;
    console.log(g,o,i);
    function outer(){
        var o= 1;
        console.log(g,o,i);
        function inner(){
            var i=2;
            console.log(g,o,i);
        }
        inner();
    }
    outer();
}
global();

console.log("End----")