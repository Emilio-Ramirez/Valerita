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
  if (!link) {
    console.log('Technical sheet link not found');
    return;
  }

  // Get current page filename
  let currentPage = window.location.pathname.split('/').pop();
  // Handle case where pathname ends with / or is empty
  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
  }

  // Get current language - try multiple sources
  let lang = document.documentElement.lang || // From HTML lang attribute (set by i18n.js)
            localStorage.getItem('language') || // From localStorage
            'es'; // Default to Spanish

  console.log('Technical Sheet Debug:', {
    currentPage: currentPage,
    detectedLang: lang,
    htmlLang: document.documentElement.lang,
    localStorageLang: localStorage.getItem('language'),
    currentHref: link.href
  });

  // Get the correct PDF for this page and language
  const pdfPath = technicalSheets[currentPage]?.[lang];

  if (pdfPath) {
    link.href = pdfPath;
    console.log('✓ Updated PDF link to:', pdfPath);
  } else {
    console.log('✗ Could not find PDF path for page:', currentPage, 'language:', lang);
  }
}

// Update link on page load (multiple triggers to ensure it works)
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded - updating PDF link');
  updateTechnicalSheetLink();
});

// Also update when window loads (fallback)
window.addEventListener('load', function() {
  console.log('Window loaded - updating PDF link');
  updateTechnicalSheetLink();
});

// Update after delays to catch language setting
setTimeout(function() {
  console.log('Delayed update 1 (500ms)');
  updateTechnicalSheetLink();
}, 500);

setTimeout(function() {
  console.log('Delayed update 2 (1000ms)');
  updateTechnicalSheetLink();
}, 1000);

// Watch for changes to the HTML lang attribute
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
      console.log('Language changed via HTML lang attribute to:', document.documentElement.lang);
      updateTechnicalSheetLink();
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['lang']
});

// Listen for language changes in localStorage (fallback)
window.addEventListener('storage', function(e) {
  if (e.key === 'language') {
    console.log('Language changed in localStorage to:', e.newValue);
    updateTechnicalSheetLink();
  }
});
