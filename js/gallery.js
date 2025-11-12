// Gallery Lightbox Functionality
let currentImageIndex = 0;
let galleryImages = [];

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');

  // Get all gallery images on the page
  const allGalleryImages = document.querySelectorAll('.gallery img');
  galleryImages = Array.from(allGalleryImages).map(img => img.src);

  // Find the index of the clicked image
  currentImageIndex = galleryImages.indexOf(imageSrc);

  lightboxImage.src = imageSrc;
  lightbox.classList.add('active');

  // Update arrow visibility
  updateArrowVisibility();

  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');

  // Restore body scroll
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  if (galleryImages.length === 0) return;

  currentImageIndex += direction;

  // Loop around if at the end
  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  }

  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = galleryImages[currentImageIndex];

  updateArrowVisibility();
}

function updateArrowVisibility() {
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (prevBtn && nextBtn) {
    // Always show arrows if there are multiple images
    if (galleryImages.length > 1) {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
    } else {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  }
}

// Close lightbox on Escape key, navigate with arrow keys
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    navigateLightbox(-1);
  } else if (e.key === 'ArrowRight') {
    navigateLightbox(1);
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
