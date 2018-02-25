var Emitter = require("events");
var emitter = new Emitter();
var helloEvent = "hello";
var greetEvent = "greet";

emitter.on(greetEvent, function(){
    console.log("Hello");
});

emitter.on(helloEvent, function(data){
    console.log("Привет, " + data);
});

emitter.emit(greetEvent); 
emitter.emit(helloEvent, "Мир");
