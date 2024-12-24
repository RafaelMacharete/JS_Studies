class Pokemon{

    nature = 'Jolly';
    
    constructor(name, hp, mp){
        this.name = name; // this. se refere ao objeto ("self" do python).
        this.hp = hp;
        this.mp = mp;
    }
}

// instanciar == criar o pikachu(pokemon).

let pokemon1 = new Pokemon("Pikachu", 67, 29);
let pokemon2 = new Pokemon("Charizard", 126, 76);
let pokemon3 = new Pokemon("Squirtle", 36, 12);

console.log(pokemon1);
console.log(pokemon1.hp);
console.log(pokemon1.nature);