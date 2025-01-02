let colors = ["Azul", "Blue", "Vermelho", "Red", "Roxo", "Purple"];
colors.push("Verde")
colors.push("Green")

console.log("Idx <")
for(let idx = 0; idx < colors.length; idx++){
    console.log(`Cor: ${colors[idx]}`);
}

console.log("\nIn")

for(let idx in colors){
    console.log(colors[idx]);
}

console.log("\nOf")

for(let color of colors){
    console.log(color);
}