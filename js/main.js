
/*let nombre = prompt("Ingresa tu nombre");
if(nombre == ''){
    alert('No ingresaste tu nombre')
}

alert ("Bienvenidx a Arte-Geek, " + nombre + ".\nAyudanos a personalizar la página para vos<3")


let lugar = prompt("Ingresa el país donde vivís");
let color = prompt("Cuél es tu color preferido?");  */


const form = document.getElementById('formulario');
let formulario= document.getElementById('formulario');

document.getElementById("nombreyapellido").value == "";
document.getElementById("correo").value = "";

formulario.addEventListener('submit', function(event){
    event.preventDefault();
   let inputNombre = document.querySelector('nombreyapellido'); 
   if (inputNombre.value == "" ){
    alert('El campo nombre tiene que estar completo')

   }else if( inputNombre.value.length < 3){
    alert('El campo nombre debe tener al menos 3 caracteres')
   }
   });
   


let Nombre = form.elements['nombreyapellido'];
let email = form.elements['correo'];



/* menu hamburguesa*/

const hamburguesa = document.querySelector (".hamburguesa");
const nav = document.querySelector (".navbar");
hamburguesa.addEventListener ("click", () => {
    hamburguesa.classList.toggle("active");

    navbar.classList.toggle("active");
} )