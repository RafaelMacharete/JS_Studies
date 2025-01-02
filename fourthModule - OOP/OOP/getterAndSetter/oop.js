// Usa-se o Getter e Setter, quando eu não aceito todos e quaisquer tipos de propriedades;
// Ou quando eu quero fazer conta, ou alterar a variável.
class Pokemon{

    nature = 'Jolly';
    _level = 5;
    shiny = false;

    constructor(firstName, lastName, hp, mp){
        this.firstName = firstName; // this. se refere ao objeto ("self" do python).
        this.lastName = lastName;
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

    get fullName(){ // Getter
        return `${this.firstName} ${this.lastName}`;
    }

    get level(){ // Getter
        return this._level;
    }

    set level(number){ // Setter
        if(typeof number == 'number'){
            this._level = number;
        }
    }
}
// instanciar == criar o pikachu(pokemon).

let pokemon1 = new Pokemon('Bulba','ssaur', 126, 76);
let pokemon2 = new Pokemon('Char', 'mander', 67, 29);
let pokemon3 = new Pokemon('Squir', 'tle', 36, 12);

pokemon1.level = '0';
console.log(`${pokemon1.fullName} está no level: ${pokemon1.level}.`);