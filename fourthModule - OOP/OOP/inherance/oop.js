class Person{

    age = 0;
    
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`${this.name} diz "Oi"`);
    }
}

class Student extends Person{

    constructor(name, id){
        super(name);
        this.id = id;
    }
    
    sayHi(){
        console.log(`${this.name}é um estudante e diz "Oi"`);
    }
}

let person1 = new Student("Rafael", 1);
person1.age = 17;

person1.sayHi();