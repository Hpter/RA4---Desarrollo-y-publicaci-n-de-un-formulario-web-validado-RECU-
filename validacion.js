const formulario = document.getElementById("formularioInscripcion");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  limpiarErrores();

  const nombre      = document.getElementById("nombre").value.trim();
  const correo      = document.getElementById("correo").value.trim();
  const edad        = parseInt(document.getElementById("edad").value);
  const fecha       = document.getElementById("fecha").value;
  const actividad   = document.getElementById("actividad").value;
  const comentarios = document.getElementById("comentarios").value;
  const condiciones = document.getElementById("condiciones").checked;

  let hayErrores = false;

  // TODO: valida el nombre

  // TODO: valida el email

  // TODO: valida la edad

  // TODO: valida la fecha

  // TODO: valida la actividad

  // TODO: valida las condiciones

  if (!hayErrores) {
    mostrarExito(`¡Inscripción correcta! Bienvenido/a, ${nombre}.`);
    agregarALista(nombre, actividad);
    formulario.reset();
  }
});


function mostrarError(idError, mensaje) {
  document.getElementById(idError).textContent = mensaje;
}

function mostrarExito(mensaje) {
  const div = document.getElementById("mensajes");
  div.textContent = mensaje;
  div.className = "mensajes exito";
}

function limpiarErrores() {
  document.querySelectorAll(".texto-error").forEach(el => el.textContent = "");
  const mensajes = document.getElementById("mensajes");
  mensajes.textContent = "";
  mensajes.className = "mensajes";
}

function agregarALista(nombre, actividad) {
  const lista = document.getElementById("listaInscripciones");
  const item = document.createElement("li");
  item.textContent = `${nombre} — ${actividad}`;
  lista.appendChild(item);
}
