// Função para que toda vez que a página é carregada ocorre 
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos <video> na página
    const videos = document.querySelectorAll('video');

    // Itera sobre cada vídeo e configura para dar play e silenciar
    videos.forEach(video => {
        video.muted = true; // Silencia o vídeo
        video.play();
    });
});