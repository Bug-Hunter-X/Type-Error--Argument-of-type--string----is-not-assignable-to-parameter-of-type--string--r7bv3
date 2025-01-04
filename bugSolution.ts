function greeter(person: string): string {
  return "Hello, " + person;
}

let users = ["Jane User", "John User"];

users.forEach(user => {
  console.log(greeter(user));
}); // Correct: Iterates through the array and calls greeter for each element.