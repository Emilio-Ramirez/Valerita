// Technical Sheet Language Selector
// Maps product pages to their technical sheet PDF files

const technicalSheets = {
  'raad-type-s.html': {
    es: 'pdfs/es/FICHA-TECNICA-RAAD.ES.pdf',
    en: 'pdfs/en/FICHA-TECNICA-RAAD.EN.pdf'
  },
  'raad-rc.html': {
    es: 'pdfs/es/FICHA-TECNICA-TractionShield.ES.pdf',
    en: 'pdfs/en/FICHA-TECNICA-TractionShield.EN.pdf'
  },
  'supra.html': {
    es: 'pdfs/es/FICHA-TECNICA-SUPRA.ES.pdf',
    en: 'pdfs/en/FICHA-TECNICA-SUPRA.EN.pdf'
  },
  'h-25.html': {
    es: 'pdfs/es/FICHA-TECNICA-H-25.ES.pdf',
    en: 'pdfs/en/FICHA-TECNICA-H-25.EN.pdf'
  }
};

// Function to update technical sheet link based on current language
function updateTechnicalSheetLink() {
  const link = document.getElementById('technical-sheet-link');
  if (!link) return;

  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop();

  // Get current language (from i18n.js)
  const lang = currentLang || 'es';

  // Get the correct PDF for this page and language
  const pdfPath = technicalSheets[currentPage]?.[lang];

  if (pdfPath) {
    link.href = pdfPath;
  }
}

// Update link on page load
document.addEventListener('DOMContentLoaded', updateTechnicalSheetLink);

// Listen for language changes and update the link
// This function will be called when toggleLanguage() is executed
window.addEventListener('storage', function(e) {
  if (e.key === 'language') {
    updateTechnicalSheetLink();
  }
});
