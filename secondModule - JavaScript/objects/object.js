let pokemon = {
    name: "Squirtle",
    weight: 9.0,
    characteristics: {
        shiny: false,
        strength: 9,
        health: 41,
        mp: 14
    },
    attacks:[
        {waterPulse: "Ataque de água", damage: 10 },
        {waterJet: "Ataque de água", damage: 15}        
        ]
}

console.log(pokemon)

pokemon.name = "Wartortle";
pokemon.weight = 22.4;

pokemon.characteristics.strength += 8;
pokemon.characteristics.health += 7;

console.log(pokemon)