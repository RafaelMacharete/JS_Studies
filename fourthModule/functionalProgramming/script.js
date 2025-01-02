/*let person = {
    name: 'Rafael',
    lastName: 'Macharete',
    age: 71
}

let person2 = {
    name: 'Leafar',
    lastName: 'Eterahcam',
    age: 17
}*/

function createPerson(name, lastName, age){
    return{
        name,
        lastName,
        age,
        /*getFullName: () =>{ // Arrow Function é independente, ela não acessa as propriedades do objeto
            return `${this.name} ${this.lastName}`;
        }*/
        getFullName(){
            return `${this.name} ${this.lastName}`;
        }
    }
}

let person1 = createPerson('Rafael', 'Macharete', 71);
let person2 = createPerson('Leafar', 'Eteracham', 17);

// console.log(person1.name);
// console.log(person2.name);

console.log(person1.getFullName());