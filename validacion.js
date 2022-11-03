

//Menu Hamburgeza
function form (){
    document.querySelector(".panel").classList.toggle("is-active");
}
const btn = document.querySelector(".panel-btn");
btn.addEventListener('click', form);

//Formulario

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);

    $buttonMailto.setAttribute('href', `mailto:francobonillajosemiguel@gmail.com?subject=${form.get('nombre')} /////////////  Correo: ${form.get('email')}
    //////////////////// Asunto ${form.get('asunto')} &body=${form.get('mensaje')}`);

    $buttonMailto.click();
    



}



//Haz tú validación en javascript acá

