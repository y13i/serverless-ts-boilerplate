export default class Greeter {
  name: string;

  readonly defaultName       = "John Doe";
  readonly defaultYourName   = "Jane Doe";
  readonly forbiddenYourName = "Voldemort";

  constructor(name?: string) {
    if (typeof name === "string") {
      this.name = name;
    } else {
      this.name = this.defaultName;
    }
  }

  greet(yourName?: string) {
    if (typeof yourName === "string") {
      yourName = yourName;
    } else {
      yourName = this.defaultYourName;
    }

    if (yourName === this.forbiddenYourName) {
      throw new Error("He-Who-Must-Not-Be-Named");
    }

    return `Hello ${yourName}, I am ${this.name}.`;
  }
}
