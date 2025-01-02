let programmingLanguagues = ["Java", "Python", "JavaScript", "Assembly"];

/*
let PLsFiltered = programmingLanguagues.filter((idx) => {
    if(idx.length > 4){
        return idx;
    }
});
*/

// let PLsFiltered = programmingLanguagues.filter((idx) => idx.length > 4);

let PLsFiltered = programmingLanguagues.filter((value,idx, array) => value.length > 4);


console.log(PLsFiltered);