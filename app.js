const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const mensaje = document.getElementById("mensaje");

btn1.addEventListener("click", function () {
  alert("Hola mundo");
  mostrarMensaje("Hola mundo 🌍");
});

btn2.addEventListener("click", function () {
  alert("¿Cómo te fue en el parcial?");
  mostrarMensaje("¿Cómo te fue en el parcial? 📚");
});

btn3.addEventListener("click", function () {
  alert("E.C.O.A — mejor brief de Invader 😎");
  mostrarMensaje("E.C.O.A — mejor brief de Invader 😎");
});

function mostrarMensaje(texto) {
  mensaje.textContent = texto;
  mensaje.style.opacity = 1;
  setTimeout(() => {
    mensaje.style.opacity = 0.2;
  }, 3000);
}
