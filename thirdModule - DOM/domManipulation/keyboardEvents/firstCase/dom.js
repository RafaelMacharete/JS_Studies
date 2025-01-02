function soltou(event){
    console.log(event.code);
    if(event.code == 'Enter'){
        console.log("apertou enter");
    }else{
        console.log('não apertou enter')
    }
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);

