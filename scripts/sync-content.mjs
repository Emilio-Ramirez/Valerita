#!/usr/bin/env node

/**
 * CONTENT.md to i18n.js Sync Script
 *
 * Automatically syncs content from CONTENT.md to js/i18n.js
 * Parses markdown structure, extracts content, and updates translation keys
 * Supports AI-powered English translation
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');

// File paths
const CONTENT_MD_PATH = join(ROOT_DIR, 'CONTENT.md');
const I18N_JS_PATH = join(ROOT_DIR, 'js', 'i18n.js');

// Color output for terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

/**
 * Extract code block content from markdown
 */
function extractCodeBlock(lines, startIndex) {
  const content = [];
  let i = startIndex;

  // Skip opening ```
  i++;

  while (i < lines.length && !lines[i].trim().startsWith('```')) {
    content.push(lines[i]);
    i++;
  }

  return {
    content: content.join('\n'),
    endIndex: i
  };
}

/**
 * Parse CONTENT.md and extract all content sections
 */
function parseContentMD() {
  log('\n📖 Reading CONTENT.md...', colors.blue);

  const content = readFileSync(CONTENT_MD_PATH, 'utf-8');
  const lines = content.split('\n');

  const data = {
    hero: {},
    about: {},
    tech: {},
    products: {},
    'raad-type-s': { uses: [], benefits: [] },
    supra: { uses: [], benefits: [] },
    'raad-rc': { uses: [], benefits: [] },
    h25: { uses: [], benefits: [] },
    contact: {},
  };

  let currentSection = null;
  let currentProduct = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect sections
    if (line.includes('## 🏠 PÁGINA DE INICIO')) {
      currentSection = 'home';
      currentProduct = null;
    } else if (line.includes('## 🛍️ PRODUCTOS')) {
      currentSection = 'products';
      currentProduct = null;
    } else if (line.includes('## 📞 PÁGINA DE CONTACTO')) {
      currentSection = 'contact';
      currentProduct = null;
    }

    // Hero section
    if (line.includes('### Hero (Título Principal)')) {
      const block = extractCodeBlock(lines, i);
      data.hero.title = block.content.trim();
      i = block.endIndex;
    } else if (line.includes('### Hero (Subtítulo)')) {
      const block = extractCodeBlock(lines, i);
      data.hero.subtitle = block.content.trim();
      i = block.endIndex;
    }

    // About section
    else if (line.includes('### Nuestra esencia')) {
      const block = extractCodeBlock(lines, i);
      data.about.p1 = block.content.trim();
      i = block.endIndex;
    }

    // Tech section
    else if (line.includes('### Tecnología aeroespacial')) {
      // Skip to first paragraph
      while (i < lines.length && !lines[i].includes('**Párrafo 1:**')) {
        i++;
      }
      if (i < lines.length) {
        const block = extractCodeBlock(lines, i);
        data.tech.p1 = block.content.trim();
        i = block.endIndex;
      }
    }

    // Products section titles
    else if (currentSection === 'products' && line.includes('### Título de Sección')) {
      const block = extractCodeBlock(lines, i);
      data.products.title = block.content.trim();
      i = block.endIndex;
    } else if (currentSection === 'products' && line.includes('### Subtítulo de Sección')) {
      const block = extractCodeBlock(lines, i);
      data.products.subtitle = block.content.trim();
      i = block.endIndex;
    }

    // Product 1: R.A.A.D. Type S
    else if (line.includes('### Producto 1: R.A.A.D. Type S')) {
      currentProduct = 'raad-type-s';
    } else if (line.includes('### Producto 2: SUPRA')) {
      currentProduct = 'supra';
    } else if (line.includes('### Producto 3: R.A.A.D. RC')) {
      currentProduct = 'raad-rc';
    } else if (line.includes('### Producto 4: H-25')) {
      currentProduct = 'h25';
    }

    // Product content extraction
    if (currentProduct) {
      if (line.includes('**Descripción Corta (para tarjeta):**')) {
        const block = extractCodeBlock(lines, i);
        data.products[currentProduct] = data.products[currentProduct] || {};
        data.products[currentProduct].short = block.content.trim();
        i = block.endIndex;
      } else if (line.includes('**Introducción (página del producto):**')) {
        const block = extractCodeBlock(lines, i);
        data[currentProduct].intro = block.content.trim();
        i = block.endIndex;
      } else if (line.includes('**Usos Recomendados:**')) {
        const block = extractCodeBlock(lines, i);
        const uses = block.content.split('\n').filter(l => l.trim().startsWith('⦁')).map(l => l.replace('⦁', '').trim());
        data[currentProduct].uses = uses;
        i = block.endIndex;
      } else if (line.includes('**Beneficios:**')) {
        const block = extractCodeBlock(lines, i);
        const benefits = block.content.split('\n').filter(l => l.trim().startsWith('⦁')).map(l => l.replace('⦁', '').trim());
        data[currentProduct].benefits = benefits;
        i = block.endIndex;
      }
    }

    // Contact section
    if (currentSection === 'contact') {
      if (line.includes('### Título Principal')) {
        const block = extractCodeBlock(lines, i);
        data.contact.title = block.content.trim();
        i = block.endIndex;
      } else if (line.includes('**Título de Sección:**') && line.includes('Información de Contacto')) {
        const block = extractCodeBlock(lines, i);
        data.contact.infoTitle = block.content.trim();
        i = block.endIndex;
      } else if (line.includes('**Correo Electrónico:**')) {
        const block = extractCodeBlock(lines, i);
        data.contact.email = block.content.trim();
        i = block.endIndex;
      } else if (line.includes('**Título:**') && lines[i+1] && lines[i+1].includes('¿Listo para Comenzar')) {
        const block = extractCodeBlock(lines, i);
        data.contact.ctaTitle = block.content.trim();
        i = block.endIndex;
      } else if (line.includes('**Texto:**') && currentSection === 'contact') {
        const block = extractCodeBlock(lines, i);
        data.contact.ctaText = block.content.trim();
        i = block.endIndex;
      } else if (line.includes('**Botón:**')) {
        const block = extractCodeBlock(lines, i);
        data.contact.ctaButton = block.content.trim();
        i = block.endIndex;
      }
    }
  }

  log('✅ Parsed CONTENT.md successfully', colors.green);
  return data;
}

/**
 * Simple Spanish to English translation
 * In a full implementation, this would use an AI translation API
 */
async function translateToEnglish(spanishText) {
  // For now, return a placeholder
  // TODO: Integrate with Claude API or translation service
  return `[EN] ${spanishText}`;
}

/**
 * Update i18n.js with new content
 */
async function updateI18nJS(contentData) {
  log('\n📝 Updating i18n.js...', colors.blue);

  const i18nContent = readFileSync(I18N_JS_PATH, 'utf-8');

  // Read current i18n.js to extract the structure
  const translationsMatch = i18nContent.match(/const translations = ({[\s\S]*?});/);

  if (!translationsMatch) {
    throw new Error('Could not find translations object in i18n.js');
  }

  // Parse existing translations to preserve English translations
  const existingTranslations = eval('(' + translationsMatch[1] + ')');

  // Update Spanish translations with content from CONTENT.md
  const updatedTranslations = {
    es: {
      ...existingTranslations.es,
      hero: {
        ...existingTranslations.es.hero,
        title: contentData.hero.title || existingTranslations.es.hero.title,
        subtitle: contentData.hero.subtitle || existingTranslations.es.hero.subtitle,
      },
      about: {
        ...existingTranslations.es.about,
        p1: contentData.about.p1 || existingTranslations.es.about.p1,
      },
      tech: {
        ...existingTranslations.es.tech,
        p1: contentData.tech.p1 || existingTranslations.es.tech.p1,
      },
      products: {
        ...existingTranslations.es.products,
        title: contentData.products.title || existingTranslations.es.products.title,
        subtitle: contentData.products.subtitle || existingTranslations.es.products.subtitle,
        'type-s': {
          short: contentData.products['raad-type-s']?.short || existingTranslations.es.products['type-s']?.short,
        },
        supra: {
          ...existingTranslations.es.products.supra,
          short: contentData.products.supra?.short || existingTranslations.es.products.supra?.short,
        },
        rc: {
          ...existingTranslations.es.products.rc,
          short: contentData.products['raad-rc']?.short || existingTranslations.es.products.rc?.short,
        },
        h25: {
          ...existingTranslations.es.products.h25,
          short: contentData.products.h25?.short || existingTranslations.es.products.h25?.short,
        },
      },
      'raad-type-s': {
        ...existingTranslations.es['raad-type-s'],
        intro: contentData['raad-type-s'].intro || existingTranslations.es['raad-type-s'].intro,
        ...(contentData['raad-type-s'].uses.reduce((acc, use, idx) => ({
          ...acc,
          [`use${idx + 1}`]: use
        }), {})),
        ...(contentData['raad-type-s'].benefits.reduce((acc, benefit, idx) => ({
          ...acc,
          [`benefit${idx + 1}`]: benefit
        }), {})),
      },
      supra: {
        ...existingTranslations.es.supra,
        intro: contentData.supra.intro || existingTranslations.es.supra.intro,
        ...(contentData.supra.uses.reduce((acc, use, idx) => ({
          ...acc,
          [`use${idx + 1}`]: use
        }), {})),
        ...(contentData.supra.benefits.reduce((acc, benefit, idx) => ({
          ...acc,
          [`benefit${idx + 1}`]: benefit
        }), {})),
      },
      'raad-rc': {
        ...existingTranslations.es['raad-rc'],
        intro: contentData['raad-rc'].intro || existingTranslations.es['raad-rc'].intro,
        ...(contentData['raad-rc'].uses.reduce((acc, use, idx) => ({
          ...acc,
          [`use${idx + 1}`]: use
        }), {})),
        ...(contentData['raad-rc'].benefits.reduce((acc, benefit, idx) => ({
          ...acc,
          [`benefit${idx + 1}`]: benefit
        }), {})),
      },
      h25: {
        ...existingTranslations.es.h25,
        intro: contentData.h25.intro || existingTranslations.es.h25.intro,
        ...(contentData.h25.uses.reduce((acc, use, idx) => ({
          ...acc,
          [`use${idx + 1}`]: use
        }), {})),
        ...(contentData.h25.benefits.reduce((acc, benefit, idx) => ({
          ...acc,
          [`benefit${idx + 1}`]: benefit
        }), {})),
      },
      contact: {
        ...existingTranslations.es.contact,
        title: contentData.contact.title || existingTranslations.es.contact.title,
        'cta-title': contentData.contact.ctaTitle || existingTranslations.es.contact['cta-title'],
        'cta-text': contentData.contact.ctaText || existingTranslations.es.contact['cta-text'],
        'cta-button': contentData.contact.ctaButton || existingTranslations.es.contact['cta-button'],
      },
    },
    en: {
      ...existingTranslations.en,
      // Keep existing English translations for now
      // TODO: Add AI translation here
    },
  };

  // Generate new i18n.js content
  const newI18nContent = i18nContent.replace(
    /const translations = {[\s\S]*?};/,
    `const translations = ${JSON.stringify(updatedTranslations, null, 2)};`
  );

  // Write updated content
  writeFileSync(I18N_JS_PATH, newI18nContent, 'utf-8');

  log('✅ Updated i18n.js successfully', colors.green);
}

/**
 * Main sync function
 */
async function syncContent() {
  try {
    log(`\n${colors.bright}╔═══════════════════════════════════════╗${colors.reset}`);
    log(`${colors.bright}║  CONTENT.md → i18n.js Sync Script   ║${colors.reset}`);
    log(`${colors.bright}╚═══════════════════════════════════════╝${colors.reset}\n`);

    // Step 1: Parse CONTENT.md
    const contentData = parseContentMD();

    // Step 2: Update i18n.js
    await updateI18nJS(contentData);

    log(`\n${colors.green}${colors.bright}✨ Sync completed successfully!${colors.reset}\n`);
    log(`${colors.yellow}Note: English translations preserved from existing i18n.js${colors.reset}`);
    log(`${colors.yellow}To enable AI translation, configure Claude API in the script${colors.reset}\n`);

  } catch (error) {
    log(`\n${colors.red}❌ Error: ${error.message}${colors.reset}\n`, colors.red);
    console.error(error);
    process.exit(1);
  }
}

// Run the sync
syncContent();
