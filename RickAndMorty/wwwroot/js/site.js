// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos con la clase "character-name"
    var characterNames = document.querySelectorAll(".character-image");

    // Itera sobre cada elemento y agrega un eventListener de clic
    characterNames.forEach(function (element) {
        element.addEventListener("click", function () {
            // Encuentra el contenedor de detalles correspondiente
            var details = this.parentElement.querySelector(".character-details");

            // Muestra u oculta los detalles alternando la visibilidad
            if (details.style.display === "none") {
                details.style.display = "block";
            } else {
                details.style.display = "none";
            }
        });
    });
});
