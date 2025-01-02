// https://jsonplaceholder.typicode.com/posts

// Promise = Promessa

function clicou() {
    // GET, POST, PUT, DELETE
    // Get - Pegar
    // Post - Postar/Inserir um dado novo
    // Put - Alterar um dado que já existe
    // Delete - Exclui
    // fetch é uma função do JS para realizar as requisições
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(`Status: ${response.status}`)
            return response.json();
        })
        .then((json) => {
            alert(json[0].title);
        })
        .catch((error) => { // "Tratamento" de erro
            alert('Ocorreu um erro na requisição!');
            console.log(error)
        })
        .finally(() => {
            alert('Opa, acabou tudo')
        })
}

function inserir() {
    fetch(
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
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        })
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);