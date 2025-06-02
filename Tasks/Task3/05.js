
const fs = require("fs");


setImmediate(() => console.log("Immediate 1"));

setTimeout(() => console.log("Timeout 1"),0);

Promise.resolve("Promise resolved").then(console.log);

fs.readFile("./Tasks/Task3/hello.text","utf-8", () => {
    console.log("File read CB");
})

process.nextTick(() => console.log("next tick 1"));



setImmediate(() => console.log("Immediate 1"));

setTimeout(() => console.log("Timeout 1"),0);

Promise.resolve("Promise resolved").then(console.log);

fs.readFile("./Tasks/Task3/hello.text","utf-8", () => {
    setTimeout(() => console.log("Timeout 2"),0);
    
    process.nextTick(() => console.log("next tick 2"));

    setImmediate(() => console.log("Immediate 1"));
    
    console.log("File read CB");
})

process.nextTick(() => console.log("next tick 1"));

console.log("Last line");
