function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('#teste ul');

    /*
    console.log(ul.innerHTML); // Mostra o conteúdo da tag HTML
    ul.innerHTML +=  "<li>Conteúdo alterado</li>"; // Altera o conteúdo interno do <ul>
    */

    const li = ul.querySelectorAll('li');
    li.forEach(element => {
        element.innerHTML = "Alterando o conteúdo!";
    });
}