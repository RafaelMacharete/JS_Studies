// static é independente de objetos.
class Person{

    static hands = 2;
    age = 0

    constructor(name){
        this.name = name;
    }

    static sayHi(){
        console.log(`Oi`);
    }

    // saySmtng(){
    //     console.log(`${this.name} tem ${Person.hands} mãos`);
    // }
}

let person1 = new Person("Rafael");
console.log(`${person1.name} tem ${Person.hands} mãos`)

Person.sayHi();

// person1.saySmtng();
// Person.hands = 3; jeito errado de fazer, não faz sentido alterar um static.