function addElementFromInput() {
    const ul = document.querySelector('#teste ul');
    const input = document.querySelector('.input');
    const page = document.querySelector('body');
    const li = document.querySelectorAll('li');
    const newLi = document.createElement('li');

    if (input.value.trim() !== '') { 
        newLi.innerHTML = input.value;
        ul.appendChild(newLi); 
        input.value = ''; 

        if ((li.length + 1) % 2 === 0) {
            page.style.backgroundColor = '#0F0'; 
        } else {
            page.style.backgroundColor = '#F00'; 
        }
    }
}


const input = document.querySelector('.input');
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addElementFromInput();
    }
});
