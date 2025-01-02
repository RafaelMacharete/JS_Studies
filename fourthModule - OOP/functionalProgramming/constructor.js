let person ={
    name: 'Rafael',
    lastName: 'Macharete',
    age: 71,
    getFullName(){
        return `${this.name} ${this.lastName}`;
    },

    start(){
        console.log('Deu start na pessoa!');
    }
}

person.start();
