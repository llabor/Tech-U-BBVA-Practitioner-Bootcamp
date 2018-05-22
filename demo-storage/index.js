function guardarEnLocalStorage() {
  var txtClave = document.getElementById("txtClave"); /* Referencia al input de clave */
  var txtValor = document.getElementById("txtValor"); /* Referencia al input de valor */

  var clave = txtClave.value;
  var valor = txtValor.value;

  localStorage.setItem(clave, valor);

  var valor = {
    "nombre":"Ezequiel",
    "apellidos":"Llarena Borges",
    "ciudad":"Madrid",
    "pais":"España"
  };

  localStorage.setItem("json", JSON.stringify(valor));


}

function leerDeLocalStorage() {
  var txtClave = document.getElementById("txtClave"); /* Referencia al input de clave */
  var clave = txtClave.value;
  var valor = localStorage.getItem(clave);

  var spanValor = document.getElementById("spanValor");
  spanValor.innerText = valor;

  var datosUsuario = JSON.parse(localStorage.getItem("json"));
  console.log(datosUsuario.nombre);
  console.log(datosUsuario.pais);
  console.log(datosUsuario);
}