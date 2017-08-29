// import the "elevator.js" file into the program
const Elevator = require('./elevator.js');

// import the "person.js" file into the program
const Person = require('./person.js');

const myElevator = new Elevator();
const PersonA = new Person('Ryan', 5, 9);
const PersonB = new Person('Ernesto', 6, 3);
const PersonC = new Person('Emma', 1, 4);
const PersonD = new Person('Allana', 8, 2);
const PersonE = new Person('Dharma', 2, 10);
const PersonF = new Person('Danny', 6, 0);
const PersonG = new Person('Rachelle', 7, 4);
const PersonH = new Person('Mike', 3, 5);

// start the elevator's automatic movement
myElevator.start();

// stop the elevator after 20 seconds
setTimeout(() =>{
  myElevator.stop();
}, 27000);

setTimeout(()=> myElevator.call(PersonA), 1000);
setTimeout(()=> myElevator.call(PersonB), 5000);
setTimeout(()=> myElevator.call(PersonC), 7000);
setTimeout(()=> myElevator.call(PersonD), 2000);
setTimeout(()=> myElevator.call(PersonE), 11000);
setTimeout(()=> myElevator.call(PersonF), 15000);
setTimeout(()=> myElevator.call(PersonG), 10000);
setTimeout(()=> myElevator.call(PersonH), 12000);
