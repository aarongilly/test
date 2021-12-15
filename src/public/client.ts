import { ACoolClass } from "./pdw";

console.log("Hello from client side TypeScript");

const instance = new ACoolClass("hi");

const logToConsole = (ourClass: ACoolClass) => {
  console.log(ourClass.Param);
}

let appDiv = document.getElementById("app");
appDiv.innerHTML = instance.getParam();


logToConsole(instance); // Works fine
// logToConsole("something else"); // Fails at compile time!