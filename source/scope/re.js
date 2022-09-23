//Var
var firstName; //undefined
firstName = 'Cris';
console.log(firstName);

var lastName="Cruz" // declarar / asignar
lastName = "Cortés"; //reasignar
console.log(lastName);

var secondName = "Lana"; // declarando /asignado
var secondName = "Freya"; //reasignando y redeclarando
console.log(secondName);

// Let
let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

//let fruit = 'Cris'; no se puede redeclarar

//Const
const animal = 'dog'; //declarando
//animal = 'cat'; no es posible reasignar con const
//const animal = 'frog'; no es posible redeclarar
console.log(animal);

const vehicles = [];
vehicles.push("carrito");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);