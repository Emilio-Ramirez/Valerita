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
  let currentPage = window.location.pathname.split('/').pop();

  // Handle case where pathname ends with / or is empty
  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
  }

  // Cloudflare Pages serves files without .html extension
  // If currentPage doesn't have .html, add it for lookup
  if (currentPage && !currentPage.endsWith('.html')) {
    currentPage = currentPage + '.html';
  }

  // Get current language from HTML lang attribute or localStorage
  let lang = document.documentElement.lang ||
            localStorage.getItem('language') ||
            'es';

  // Get the correct PDF for this page and language
  const pdfPath = technicalSheets[currentPage]?.[lang];

  if (pdfPath) {
    link.href = pdfPath;
  }
}

// Update link on page load
document.addEventListener('DOMContentLoaded', updateTechnicalSheetLink);

// Watch for changes to the HTML lang attribute (when user toggles language)
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
      updateTechnicalSheetLink();
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['lang']
});
