//variables

var a; //declarando
var b = b; //declaramos / asignamos
b = 'bb'; // reasignación
var a = 'aa'; //redeclaración

//Global Scope
//acedemos donde queremos a estas variables
var fruit = 'Apple';
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; // declarando como global
    console.log(country);
}

countries();
console.log(country);