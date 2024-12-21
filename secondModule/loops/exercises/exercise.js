let fruits = ["Maçã", "Uva", "Pera", "Banana"];

console.log("FOR LENGTH")
for(let idx = 0; idx < fruits.length; idx++){
    console.log(`${idx}° Fruta: ${fruits[idx]}`);
}

console.log("\n\nFOR IN")
for(idx in fruits){
    console.log(`${idx}° Fruta: ${fruits[idx]}`);
}

console.log("\n\nFOR OF")

for( let [idx, fruit] of fruits.entries()){
    console.log(`${idx}° Fruta: ${fruit}`);
}

let count = 0;

while(count < 101){
    console.log(count);
    count++;
}