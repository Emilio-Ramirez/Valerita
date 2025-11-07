// Gallery Lightbox Functionality

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');

  lightboxImage.src = imageSrc;
  lightbox.classList.add('active');

  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');

  // Restore body scroll
  document.body.style.overflow = '';
}

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Prevent click on image from closing lightbox
document.addEventListener('DOMContentLoaded', function() {
  const lightboxContent = document.querySelector('.lightbox-content');
  if (lightboxContent) {
    lightboxContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});
