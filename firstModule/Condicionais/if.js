let userName = "Rafael da Silva Macharete";
let userAge = '17';

if(userAge < 18){
    console.log("O usuário é menor de idade!")
}else{
    console.log("O usuário é maior de idade!")
}

if(userAge === '17'){
    console.log("O usuário tem '17' anos")
}else{
    console.log("O usuário não tem 17 anos")
}

// A diferença do == para o ===, é que o primeiro não verifica se é string/int.
// Já o segundo verifica o tipo de dado atribuido a variável.
