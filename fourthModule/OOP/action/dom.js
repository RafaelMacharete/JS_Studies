class Pokemon{

    nature = 'Jolly';
    level = 5;
    shiny = false;

    constructor(name, hp, mp){
        this.name = name; // this. se refere ao objeto ("self" do python).
        this.hp = hp;
        this.mp = mp;
    }

    levelUp(){
        this.level++;
    }

    setShiny(isShiny){
        if(typeof isShiny == 'boolean'){
            this.shiny = isShiny;
        }else{
            console.log('Não foi possível mudar o estado de Shiny')
        }    
    }
}

// instanciar == criar o pikachu(pokemon).

let pokemon1 = new Pokemon("Pikachu", 67, 29);
let pokemon2 = new Pokemon("Charizard", 126, 76);
let pokemon3 = new Pokemon("Squirtle", 36, 12);

pokemon1.levelUp();
console.log(`O ${pokemon1.name} subiu de nível, e agora está no nível ${pokemon1.level}`);

pokemon1.setShiny('aaa');
console.log(pokemon1);