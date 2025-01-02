const order = 2;

let orderValue = 0;

switch (order){
    case 1:
        console.log("Você escolheu um Hambúrguer!")
        orderValue += 29.99;
        break;
    case 2:
        console.log("Você escolheu Pizza!")
        orderValue += 58.00;
        break;
    default:
        console.log("Você não escolheu nenhum dos produtos válidos!");
        break;
}

console.log(`O valor total da compra deu: R$ ${orderValue}`);