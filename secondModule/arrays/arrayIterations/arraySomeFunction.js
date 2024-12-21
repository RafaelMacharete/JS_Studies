let programmingLanguagues = ["Java", "Python", "JavaScript", "Assembly"];

/*
Se algum  dos item forem maiores do que 4, retorna true
programmingLanguagues.some((value, idx, array) => {
    if (value.length > 4){
        return true;
    }
});
*/

/*
programmingLanguagues.some((value, idx, array) => {
    return value.length > 4;
});
*/
let validate = programmingLanguagues.some((value, idx, array) => value.length > 4);

if (validate){
    console.log("Algum dos items do array é maior do que três!");
}
