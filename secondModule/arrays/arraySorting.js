let programmingLanguagues = ["Java", "Python", "JavaScript", "Assembly"];

programmingLanguagues.sort(); // Ordem alfabética.
programmingLanguagues.reverse(); // Inverte a ordem.

console.log(programmingLanguagues);


let students = [
    {name: "Leafar", avarageNote: 9.4},
    {name: "Farael", avarageNote: 9.3},
    {name: "Rafael", avarageNote: 9.5}
]


/*
students.sort((firstComparisionItem, secondComparisionItem) => {
    if(firstComparisionItem.avarageNote > secondComparisionItem.avarageNote){
        return 1;
        }else{
            return -1;
    }
    });*/
    
students.sort((firstComparisionItem, secondComparisionItem) => firstComparisionItem.avarageNote - secondComparisionItem.avarageNote);

console.log(students);