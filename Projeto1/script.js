document.addEventListener('DOMContentLoaded', function() {
    const carrosseis = document.querySelectorAll('.carrossel');
  
    carrosseis.forEach(carrossel => {
      let currentImageIndex = 0;
      const images = carrossel.querySelectorAll('img');
      const totalImages = images.length;
      const intervalTime = 3000; // Tempo em milissegundos (3 segundos)
  
      const nextImage = () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add('active');
      };
  
      setInterval(nextImage, intervalTime);
    });
  });
  