// https://jsonplaceholder.typicode.com/posts

// Promise = Promessa
// Get - Pegar
// Post - Postar/Inserir um dado novo
// Put - Alterar um dado que já existe
// Delete - Exclui

async function clicou() {
    // fetch é uma função do JS para realizar as requisições
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    alert(`Título do primeiro post: ${json[0].title}`);
    alert('Clicou');
}

async function inserir() {
    let reponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        })
        
    let json = await reponse.json();
    console.log(json);     
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);