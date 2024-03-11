
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



document.addEventListener("DOMContentLoaded", function () {
    var audio = new Audio("extra/RYMSoundtrack.mp3");
    audio.loop = true;

    // Función para reproducir el audio cuando el usuario hace clic en un botón
    function playAudio() {
        var playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // La reproducción comenzó correctamente
            }).catch(error => {
                // El usuario denegó el permiso, manejarlo aquí
                console.error("Error al reproducir audio:", error);
            });
        }
    }

    // Asociar la función playAudio al evento clic de un botón
    var playButton = document.getElementById("playButton");
    if (playButton) {
        playButton.addEventListener("click", playAudio);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("audioPlayer");
    audio.play().catch(function (error) {
        console.error("Error al reproducir audio:", error);
    });
});