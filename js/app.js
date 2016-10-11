window.addEventListener("load", carga);
function carga() {
	var video = document.querySelectorAll("a");
	for (var i = 0; i < video.length; i++) {
		var videoUrl = video[i];
		var enlace = videoUrl.getAttribute("href");
		var thumbaUrl = youtube.generateThumbnailUrl(enlace);
		var imagen = document.createElement("img");
		imagen.setAttribute("src", thumbaUrl);
		videoUrl.appendChild(imagen);
	}
}
