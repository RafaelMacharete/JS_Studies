// Elements
const input = document.querySelector('input');
const lista = document.querySelector('ul');

// Function
function handleKeyUp(event){
    if (event.key === 'Enter'){
        //Adicionar
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        // Limpar o campo 
        input.value = '';
    }
}

// Event
input.addEventListener('keyup', handleKeyUp);