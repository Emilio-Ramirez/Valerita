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
  console.log('═══════════════════════════════════════════════════════');
  console.log('[DEBUG] updateTechnicalSheetLink() called at:', new Date().toISOString());
  console.log('[DEBUG] Call stack:', new Error().stack);

  const link = document.getElementById('technical-sheet-link');
  console.log('[DEBUG] Link element found:', !!link);
  console.log('[DEBUG] Link element:', link);

  if (!link) {
    console.error('[DEBUG] ✗ Technical sheet link element not found in DOM');
    return;
  }

  // Get current page filename
  let currentPage = window.location.pathname.split('/').pop();
  console.log('[DEBUG] Raw pathname:', window.location.pathname);
  console.log('[DEBUG] Parsed currentPage:', currentPage);

  // Handle case where pathname ends with / or is empty
  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
    console.log('[DEBUG] Empty pathname, defaulting to:', currentPage);
  }

  // Cloudflare Pages serves files without .html extension
  // If currentPage doesn't have .html, add it for lookup
  if (currentPage && !currentPage.endsWith('.html')) {
    currentPage = currentPage + '.html';
    console.log('[DEBUG] Added .html extension for lookup:', currentPage);
  }

  // Get current language - try multiple sources
  const htmlLang = document.documentElement.lang;
  const localStorageLang = localStorage.getItem('language');

  console.log('[DEBUG] Language detection:');
  console.log('[DEBUG]   - document.documentElement.lang:', htmlLang);
  console.log('[DEBUG]   - localStorage.getItem("language"):', localStorageLang);

  let lang = htmlLang || localStorageLang || 'es';

  console.log('[DEBUG]   - Final selected lang:', lang);

  console.log('[DEBUG] Link element before update:');
  console.log('[DEBUG]   - href:', link.href);
  console.log('[DEBUG]   - getAttribute("href"):', link.getAttribute('href'));

  // Get the correct PDF for this page and language
  console.log('[DEBUG] Looking up PDF for:', { currentPage, lang });
  console.log('[DEBUG] Available sheets for page:', technicalSheets[currentPage]);
  const pdfPath = technicalSheets[currentPage]?.[lang];
  console.log('[DEBUG] Resolved PDF path:', pdfPath);

  if (pdfPath) {
    link.href = pdfPath;
    console.log('[DEBUG] ✓ Updated link.href to:', pdfPath);
    console.log('[DEBUG] Link element after update:');
    console.log('[DEBUG]   - href:', link.href);
    console.log('[DEBUG]   - getAttribute("href"):', link.getAttribute('href'));
  } else {
    console.error('[DEBUG] ✗ Could not find PDF path for page:', currentPage, 'language:', lang);
    console.error('[DEBUG] Available pages:', Object.keys(technicalSheets));
  }
  console.log('═══════════════════════════════════════════════════════');
}

// Update link on page load (multiple triggers to ensure it works)
document.addEventListener('DOMContentLoaded', function() {
  console.log('[DEBUG] ►►► EVENT: DOMContentLoaded fired ◄◄◄');
  updateTechnicalSheetLink();
});

// Also update when window loads (fallback)
window.addEventListener('load', function() {
  console.log('[DEBUG] ►►► EVENT: window.load fired ◄◄◄');
  updateTechnicalSheetLink();
});

// Update after delays to catch language setting
setTimeout(function() {
  console.log('[DEBUG] ►►► EVENT: setTimeout 500ms fired ◄◄◄');
  updateTechnicalSheetLink();
}, 500);

setTimeout(function() {
  console.log('[DEBUG] ►►► EVENT: setTimeout 1000ms fired ◄◄◄');
  updateTechnicalSheetLink();
}, 1000);

// Watch for changes to the HTML lang attribute
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
      console.log('[DEBUG] ►►► EVENT: MutationObserver detected lang change ◄◄◄');
      console.log('[DEBUG] Old value:', mutation.oldValue);
      console.log('[DEBUG] New value:', document.documentElement.lang);
      updateTechnicalSheetLink();
    }
  });
});

console.log('[DEBUG] Setting up MutationObserver on document.documentElement');
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['lang'],
  attributeOldValue: true
});

// Listen for language changes in localStorage (fallback)
window.addEventListener('storage', function(e) {
  console.log('[DEBUG] ►►► EVENT: storage event fired ◄◄◄');
  console.log('[DEBUG] Storage event details:', { key: e.key, oldValue: e.oldValue, newValue: e.newValue });
  if (e.key === 'language') {
    console.log('[DEBUG] Language storage key changed to:', e.newValue);
    updateTechnicalSheetLink();
  }
});

console.log('[DEBUG] ■ technical-sheet.js loaded and initialized ■');
