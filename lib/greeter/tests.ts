import Greeter from ".";

const greeter1 = new Greeter();
const greeter2 = new Greeter("Bilbo");
const greeter3 = new Greeter();

greeter1.greet(); // => "Hello Jane Doe, I am John Doe."
greeter2.greet("Gandalf"); // => "Hello Gandalf, I am Bilbo."
greeter3.greet("Voldemort"); // => throw Error
