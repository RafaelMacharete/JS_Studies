class Person{

    age = 0;

    constructor(name){
        this.name = name;
    }
}

function createPerson(name, age){
    let modelPerson = new Person(name, age);
    modelPerson.age = age;
    return modelPerson;
}

let person1 = createPerson("Rafael", 17);

console.log(`${person1.name} tem ${person1.age} anos`);