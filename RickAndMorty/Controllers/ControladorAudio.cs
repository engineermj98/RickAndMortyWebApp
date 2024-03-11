using Microsoft.AspNetCore.Mvc;

namespace RickAndMorty.Controllers
{
    public class ControladorAudio : Controller
    {
        public IActionResult PlayAudioLoop()
        {
            // Lógica del controlador

            // Devolver JavaScript para reproducir el audio en un ciclo infinito
            return Content("<script>playAudioLoop();</script>", "text/html");
        }
    }
}
