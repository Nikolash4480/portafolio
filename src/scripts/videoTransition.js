export function handleVideoEnd(currentVideoId, nextVideoId) {
  const currentVideo = document.getElementById(currentVideoId);
  const nextVideo = document.getElementById(nextVideoId);
 
  if (currentVideo && nextVideo) {
    // Ocultar el video actual
    currentVideo.style.opacity = '0';
    
    // Resetear el video actual para el próximo ciclo
    setTimeout(() => {
      currentVideo.currentTime = 0;
    }, 1000);
   
    // Mostrar y reproducir el siguiente video después de un pequeño delay
    setTimeout(() => {
      nextVideo.style.opacity = '1';
      nextVideo.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }, 1000);
  }
}

// Asegurarse de que los videos están configurados correctamente al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');
 
  if (video1 && video2) {
    // Configuración inicial
    video1.style.opacity = '1';
    video2.style.opacity = '0';
    
    // Asegurarse de que los videos se reproduzcan en loop
    video1.addEventListener('ended', () => handleVideoEnd('video1', 'video2'));
    video2.addEventListener('ended', () => handleVideoEnd('video2', 'video1'));
  }
});