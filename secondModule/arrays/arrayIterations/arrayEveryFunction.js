let programmingLanguagues = ["Java", "Python", "JavaScript", "Assembly"];

/*
Se todos os item forem maiores do que 4, retorna true
programmingLanguagues.every((value, idx, array) => {
    if (value.length > 4){
        return true;
    }
});
*/

/*
programmingLanguagues.every((value, idx, array) => {
    return value.length > 4;
});
*/
let validate = programmingLanguagues.every((value, idx, array) => value.length > 4);

if (validate){
    console.log("Todos os items do array são maiores do que três!");
}
