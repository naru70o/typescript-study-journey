const course = "typescript";

courseName(course);

function courseName(name: string) {
  console.log("course name is: " + name);
}

//// decorator

// Enable experimental decorators in tsconfig.json
// { "compilerOptions": { "experimentalDecorators": true } }

function Logger(target: Function) {
  console.log(`Class ${target.name} was defined.`);
}

// Apply the @Logger decorator to a class
@Logger
class Person {
  constructor(public name: string, public age: number) {
    console.log(`this is ${name}, ${age} from somaliland`);
  }
}
@Logger
class Person2 {
  constructor(public name: string, public age: number) {
    console.log(`this is ${name}, ${age} from somaliland`);
  }
}

const person = new Person("Naruto", 20);

/////// class decorator
function Sealer(target: Function) {
  Object.seal(target); // Seal the constructor itself
  Object.seal(target.prototype); // Seal the prototype to prevent adding/removing methods
  console.log(`Class ${target.name} has been sealed.`);
}

// Apply the @Sealer decorator to a class
@Sealer
class User {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
  newMethod() {
    console.log("This won't work because the class is sealed.");
  }
}

const user = new User("Naruto", 20);
user.greet();

// Attempt to modify the class (will fail silently or throw an error in strict mode)
User.prototype.newMethod = function () {
  console.log("This won't work because the class is sealed.");
};

user["newProperty"] = "Test"; // Also won't work
console.log(user);
