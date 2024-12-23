function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('#teste ul');

    let newUl = document.createElement('ul');

    let newLi = document.createElement('li');
    newLi.innerHTML = "Item adicionado!";
    newUl.append(newLi);

    ul.after(newUl);
}