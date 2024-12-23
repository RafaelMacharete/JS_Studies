function clicou(){
    const input = document.querySelector('input');
    const button = document.querySelector('.botao')

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        button.innerHTML = 'Mostrar senha'
    }else{
        input.setAttribute('type', 'text');
        button.innerHTML = 'Ocultar senha'
    }
}