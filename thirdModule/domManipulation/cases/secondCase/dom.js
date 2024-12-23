function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('#teste ul');

    // ul.children[0].append("(Alterado!)"); // Não reprocessa todos os elementos!
    // ul.children[0].innerHTML += ("(Alterado!)"); // Reprocessa todos os elementos!
    // ul.append("Alterado") // Adiciona um texto
    let newLi = document.createElement('li'); // Adiciona um elemento
    newLi.innerHTML = "Item Adicionado!";

    ul.appendChild(newLi);
}