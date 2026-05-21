const button = document.getElementById("toggleBtn");

const ajuda = document.getElementById("ajuda");

button.addEventListener("click", () => {

  ajuda.classList.toggle("hidden");

  if(ajuda.classList.contains("hidden")){
    button.innerText = "Mostrar Canais de Ajuda";
  } else {
    button.innerText = "Ocultar Canais de Ajuda";
  }

});
