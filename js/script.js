let main_container = document.getElementById("main-container");
let home_button = document.getElementById("home_button");
let history_button = document.getElementById("history_button");
let stadistics_button = document.getElementById("stadistics_button");
let about_button = document.getElementById("about_button");
let store_button = document.getElementById("store_button");
let login_button = document.getElementById("login_button");

home_button.addEventListener("click", function () {
  alert("Boton home presionado");
});

history_button.addEventListener("click", function () {
  alert("Boton history presionado");
});


stadistics_button.addEventListener("click", function () {
  document.getElementById("main-container").innerHTML = "";

  const plantilla = document.getElementById("calculator-section");

  // Clonar el contenido de la plantilla
  const clon = plantilla.content.cloneNode(true);

  // Insertar el contenido clonado en el contenedor
  document.getElementById("main-container").appendChild(clon);
});

about_button.addEventListener("click", function () {
  document.getElementById("main-container").innerHTML = "";

  const plantilla = document.getElementById("information-section");

  // Clonar el contenido de la plantilla
  const clon = plantilla.content.cloneNode(true);

  // Insertar el contenido clonado en el contenedor
  document.getElementById("main-container").appendChild(clon);
});

store_button.addEventListener("click", function () {
  alert("Boton tienda virtual presionado");
});

login_button.addEventListener("click", function () {
  alert("Boton login presionado");
});

/* ----------------------  Manejo de templates ----------------*/



/* ----------------------  ------------------ ----------------*/
