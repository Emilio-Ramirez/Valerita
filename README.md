# TIU Pavimentos - Website Documentation

## 📋 Table of Contents
1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [How to Edit Content](#how-to-edit-content)
4. [Adding/Managing Products](#addingmanaging-products)
5. [Managing Images](#managing-images)
6. [Translations (Spanish/English)](#translations-spanishenglish)
7. [Customizing Colors and Design](#customizing-colors-and-design)
8. [Technical PDFs](#technical-pdfs)
9. [Contact Information](#contact-information)
10. [Quick Start Guide](#quick-start-guide-for-common-tasks)

---

## 🌟 Overview

This website is built for TIU Pavimentos to showcase pavement solutions and products. The site includes:
- **Home Page** (index.html): Hero section, About, and Technology sections
- **Products Page** (productos.html): Grid of all 4 products with cards
- **Individual Product Pages**: Detailed information, galleries, and downloadable technical sheets
- **Contact Page** (contacto.html): Company contact information and office hours
- **Bilingual Support**: Spanish and English with a language toggle button

**Design Features:**
- Adobe Caslon Pro font throughout
- Olive green accent color (#A1B668)
- Creative product cards with solid green shadows
- Responsive design (works on all devices)
- Elegant, professional aesthetic

---

## 📁 File Structure

```
valeria/
│
├── index.html                 # Home page
├── productos.html             # Products listing page
├── contacto.html              # Contact page
├── raad-type-s.html          # R.A.A.D. Type S product page
├── supra.html                # SUPRA product page
├── raad-rc.html              # R.A.A.D. RC (TractionShield) product page
├── h-25.html                 # H-25 product page
│
├── css/
│   └── styles.css            # All styling and design
│
├── js/
│   ├── main.js               # Navigation and interactions
│   ├── i18n.js               # Spanish/English translations
│   └── gallery.js            # Image lightbox functionality
│
├── images/
│   ├── logo/
│   │   └── logo.png          # Company logo (used in navbar)
│   ├── hero/
│   │   └── hero-bg.jpg       # Home page hero background image
│   ├── type-s/               # R.A.A.D. Type S product images
│   ├── supra/                # SUPRA product images
│   ├── tractionshield/       # R.A.A.D. RC product images
│   └── h25/                  # H-25 product images
│
└── docs/
    ├── raad-type-s-ficha-tecnica.pdf
    ├── supra-ficha-tecnica.pdf
    ├── raad-rc-ficha-tecnica.pdf
    └── h25-ficha-tecnica.pdf
```

---

## ✏️ How to Edit Content

### Editing Text on Pages

All text content can be edited directly in the HTML files. Open any `.html` file with a text editor (like VS Code, Sublime Text, or even Notepad).

#### Example: Editing the Home Page Hero Title

**File:** `index.html`

Find this section:
```html
<h1 class="hero-title" data-i18n="hero.title">Soluciones Innovadoras para Pavimentos</h1>
```

- The text between `>` and `</h1>` is what appears on the page in Spanish
- Change it to whatever you want
- The `data-i18n="hero.title"` connects it to translations (see Translations section)

#### Example: Editing About Section

**File:** `index.html`

Find the section with:
```html
<h2 data-i18n="about.title">Quiénes Somos</h2>
<p data-i18n="about.p1">
  Somos una empresa dedicada a ofrecer soluciones innovadoras...
</p>
```

Simply change the text between the tags.

#### Example: Editing Product Descriptions

**File:** Any product page (e.g., `raad-type-s.html`)

```html
<p style="font-size: var(--font-size-lg); color: var(--color-gray-600); margin-bottom: var(--space-6);" data-i18n="raad-type-s.intro">
  Este tratamiento superficial está diseñado para proteger e impermeabilizar pavimentos asfálticos...
</p>
```

Change the text between `>` and `</p>`.

---

## 🛍️ Adding/Managing Products

Currently there are 4 products:
1. **R.A.A.D. Type S** (`raad-type-s.html`)
2. **SUPRA** (`supra.html`)
3. **R.A.A.D. RC (TractionShield)** (`raad-rc.html`)
4. **H-25** (`h-25.html`)

### To Add a New Product (Complete Step-by-Step):

#### Step 1: Create Product Folder for Images
Create a new folder in `images/` with a simple name (no spaces, lowercase):
```
images/new-product-name/
```

**Example:** If your product is called "SuperSeal Pro", create:
```
images/superseal-pro/
```

#### Step 2: Add Product Images
Place all gallery images in the new folder.

**Naming Guidelines:**
- Use clear, descriptive names
- No spaces (use hyphens `-` or underscores `_`)
- Use lowercase
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.JPG`, `.PNG`

**Good Examples:**
- `application-highway-1.jpg`
- `before-after-comparison.jpg`
- `product-close-up.jpg`
- `IMG_0001.jpg` (from camera is fine too)

**Bad Examples:**
- `Image 1.jpg` (has space)
- `PHOTO WITH SPACES.PNG` (has spaces)

#### Step 3: Choose a Card Image
Pick ONE image from your gallery to be the "card image" - this will appear on the products page grid. This should be a clear, high-quality image that represents the product well.

Note its filename. Example: `main-product-shot.jpg`

#### Step 4: Add Product Card to productos.html

**File:** `productos.html`

Find the grid section (around line 47) and add a new card after the existing ones:

```html
<!-- Product 5 - Your New Product -->
<a href="new-product.html" class="card">
  <img src="images/new-product-name/main-image.jpg" alt="New Product Name" class="card-image">
  <div class="card-content">
    <h3 class="card-title">New Product Name</h3>
    <p class="card-description" data-i18n="products.newproduct.short">
      Short description of the product here (1-2 sentences maximum).
    </p>
  </div>
</a>
```

**Replace:**
- `new-product.html` → your product page filename
- `images/new-product-name/main-image.jpg` → path to your card image
- `New Product Name` → your product name
- `products.newproduct.short` → unique translation key
- Description text → your short product description

#### Step 5: Create Product Detail Page

**Copy an existing product file:**
1. Find `raad-type-s.html`
2. Copy it
3. Rename the copy to your new product name: `new-product.html`

**Edit the new file:**

**A. Update the `<head>` section (lines 4-7):**
```html
<meta name="description" content="Your Product - Short description">
<title>Your Product Name - TIU Pavimentos</title>
```

**B. Update the product title (around line 39):**
```html
<h1 style="margin-bottom: var(--space-2);">Your Product Name</h1>
```

**C. Update the intro paragraph (around line 41):**
```html
<p style="font-size: var(--font-size-lg); color: var(--color-gray-600); margin-bottom: var(--space-6);" data-i18n="yourproduct.intro">
  Your product introduction text here in Spanish.
</p>
```

**D. Update the description (around line 45):**
```html
<p data-i18n="yourproduct.description">
  Full product description here in Spanish.
</p>
```

**E. Update the PDF link (around line 74):**
```html
<a href="docs/your-product-ficha-tecnica.pdf" class="btn btn-primary" download data-i18n="product.download-pdf">Descargar PDF</a>
```

#### Step 6: Add Gallery Images to Product Page

In your new product HTML file, find the gallery section (around line 78):

**Delete the example gallery items and add yours:**

```html
<div class="gallery">
  <div class="gallery-item" onclick="openLightbox('images/new-product-name/image1.jpg')">
    <img src="images/new-product-name/image1.jpg" alt="Product application 1">
  </div>
  <div class="gallery-item" onclick="openLightbox('images/new-product-name/image2.jpg')">
    <img src="images/new-product-name/image2.jpg" alt="Product application 2">
  </div>
  <div class="gallery-item" onclick="openLightbox('images/new-product-name/image3.jpg')">
    <img src="images/new-product-name/image3.jpg" alt="Product application 3">
  </div>
  <!-- Add as many as you want! -->
</div>
```

**For each image in your gallery:**
- Copy one `<div class="gallery-item">...</div>` block
- Update the image path in TWO places (onclick and src)
- Update the alt text description

**Important Notes:**
- You can add as many gallery images as you want
- The images will automatically arrange in a grid
- Each image will open in a fullscreen lightbox when clicked
- The images have rounded corners and green shadows automatically

#### Step 7: Add Translations

**File:** `js/i18n.js`

Add your product translations to both Spanish and English sections:

```javascript
const translations = {
  es: {
    // ... existing translations ...
    "products.newproduct.short": "Breve descripción del producto",
    "yourproduct.intro": "Texto de introducción del producto",
    "yourproduct.description": "Descripción completa del producto",
  },
  en: {
    // ... existing translations ...
    "products.newproduct.short": "Short product description",
    "yourproduct.intro": "Product introduction text",
    "yourproduct.description": "Full product description",
  }
};
```

---

## 🖼️ Managing Images

### Logo (Navbar)
**Location:** `images/logo/logo.png`

**Current Size:** The logo appears at about 45px height in the navbar

**To change the logo:**
1. Replace the file `images/logo/logo.png` with your new logo
2. Keep the same filename: `logo.png`
3. **Recommended specs:**
   - Format: PNG with transparent background
   - Width: 150-200px
   - Height: 40-50px
   - Max file size: 100KB

### Hero Background (Home Page)
**Location:** `images/hero/hero-bg.jpg`

**Current Image:** A professional pavement/runway photo

**To change the hero background:**
1. Replace `images/hero/hero-bg.jpg` with your new image
2. Keep the same filename: `hero-bg.jpg`
3. **Recommended specs:**
   - Minimum size: 1920x1080 (Full HD)
   - Preferred size: 2560x1440 or larger
   - Format: JPG
   - Max file size: 500KB (compress if needed)
   - Subject: Should have good contrast for white text overlay

**Tip:** Use a darker image or one with space in the center for text readability.

### Product Card Images

**Current Product Card Images:**
- R.A.A.D. Type S: `images/type-s/IMG_0123.JPG`
- SUPRA: `images/supra/IMG_0422.JPG`
- R.A.A.D. RC: `images/tractionshield/IMG_0783.JPG`
- H-25: `images/h25/IMG_6584.jpg`

**To change a product card image:**

1. Open `productos.html`
2. Find the product card (around line 50-90)
3. Look for: `<img src="images/product-folder/old-image.jpg"`
4. Replace with your new image filename
5. **Recommended specs:**
   - Aspect ratio: 4:3 or 3:2
   - Minimum size: 800x600px
   - Format: JPG
   - Max file size: 200KB per image

**Example:**
```html
<!-- Before -->
<img src="images/type-s/IMG_0123.JPG" alt="R.A.A.D. Type S" class="card-image">

<!-- After -->
<img src="images/type-s/new-product-photo.jpg" alt="R.A.A.D. Type S" class="card-image">
```

### Product Gallery Images

Each product has its own folder in `images/`:
- `images/type-s/` - R.A.A.D. Type S images (23 images)
- `images/supra/` - SUPRA images (17 images)
- `images/tractionshield/` - R.A.A.D. RC images (5 images)
- `images/h25/` - H-25 images (5 images)

**To add/replace gallery images:**

1. **Add images to the product folder:**
   - Go to the appropriate folder (e.g., `images/supra/`)
   - Add your `.jpg` or `.png` images
   - Name them clearly (see naming guidelines above)

2. **Update the product HTML file:**
   - Open the product page (e.g., `supra.html`)
   - Find the gallery section (around line 56)
   - Add/update gallery items:

```html
<div class="gallery-item" onclick="openLightbox('images/supra/your-new-image.jpg')">
  <img src="images/supra/your-new-image.jpg" alt="SUPRA application">
</div>
```

**Gallery Image Specs:**
- Format: JPG or PNG
- Size: 1200x900 or larger
- Max file size: 300KB per image
- Aspect ratio: 4:3 works best (but any ratio works)

**How many gallery images?**
- Minimum: 3 images per product
- Maximum: No limit! Add as many as you want
- Current averages: 5-23 images per product

---

## 🌍 Translations (Spanish/English)

The website supports Spanish and English. Translations are stored in `js/i18n.js`.

**How it works:**
- All pages load in Spanish by default
- User can click "EN / ES" button to toggle language
- Language preference is saved in browser
- Next visit remembers the language choice

### To Edit Existing Translations:

**File:** `js/i18n.js`

Open the file and you'll see this structure:

```javascript
const translations = {
  es: {
    "nav.logo": "TIU PAVIMENTOS",
    "nav.home": "Inicio",
    "nav.products": "Productos",
    "nav.contact": "Contacto",
    "hero.title": "Soluciones Innovadoras para Pavimentos",
    // ... more translations
  },
  en: {
    "nav.logo": "TIU PAVIMENTOS",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.contact": "Contact",
    "hero.title": "Innovative Solutions for Pavements",
    // ... more translations
  }
};
```

### How to Edit a Translation:

1. Find the translation key (the text in quotes before the colon)
2. Update the Spanish version under `es: {`
3. Update the English version under `en: {`
4. Save the file

**Example:** To change the hero title:

```javascript
es: {
  "hero.title": "Sus Mejores Soluciones para Pavimentos",  // Changed
},
en: {
  "hero.title": "Your Best Pavement Solutions",  // Changed
}
```

### Adding Translation for New Content:

**When you add new text with `data-i18n="key"`**, you MUST add it to `i18n.js`:

**Step 1:** Add text to HTML with translation key
```html
<p data-i18n="about.mission">Nuestra misión es innovar</p>
```

**Step 2:** Add translation to `i18n.js`
```javascript
es: {
  "about.mission": "Nuestra misión es innovar",
},
en: {
  "about.mission": "Our mission is to innovate",
}
```

### Common Translation Keys:

**Navigation:**
- `nav.logo` - Company name
- `nav.home` - Home link
- `nav.products` - Products link
- `nav.contact` - Contact link

**Hero Section:**
- `hero.title` - Main hero title
- `hero.subtitle` - Hero subtitle text

**About Section:**
- `about.title` - "Who We Are" heading
- `about.p1` - About paragraph

**Product Cards:**
- `products.title` - "Our Products" heading
- `products.type-s.short` - R.A.A.D. Type S card description
- `products.supra.short` - SUPRA card description
- `products.rc.short` - R.A.A.D. RC card description
- `products.h25.short` - H-25 card description

**Footer:**
- `footer.company` - Company name
- `footer.tagline` - Company tagline
- `footer.contact` - "Contact" heading
- `footer.info` - "Information" heading
- `footer.rights` - "All rights reserved"

---

## 🎨 Customizing Colors and Design

All styling is controlled in `css/styles.css`.

### Changing the Green Accent Color:

**File:** `css/styles.css` (around line 19)

```css
:root {
  /* Olive green from user */
  --color-olive: #A1B668;        /* Main green - CHANGE THIS */
  --color-olive-dark: #8a9e56;   /* Darker shade - CHANGE THIS */
  --color-olive-light: rgba(161, 182, 104, 0.1);  /* Light version */
}
```

**To change to a different color:**
1. Replace `#A1B668` with your desired hex color
2. Replace `#8a9e56` with a darker version of your color
3. Update the RGB values in `rgba(161, 182, 104, 0.1)` to match

**Where the green color appears:**
- Navbar bottom border (thick 4px line)
- Navigation link text
- Product card shadows
- Language toggle button
- Gallery image hover effects
- Product titles (gradient effect)

### Changing Other Colors:

```css
:root {
  /* Colors */
  --color-black: #000000;       /* Pure black for text */
  --color-white: #ffffff;       /* Pure white for backgrounds */
  --color-gray-100: #f5f5f5;    /* Light gray backgrounds */
  --color-gray-200: #e5e5e5;    /* Borders */
  --color-gray-300: #d4d4d4;    /* Medium borders */
  --color-gray-600: #525252;    /* Body text color */
  --color-gray-800: #262626;    /* Dark text */
}
```

### Adjusting Font Sizes:

**File:** `css/styles.css` (around line 25)

```css
:root {
  --font-size-xs: 0.75rem;      /* 12px - Small button */
  --font-size-sm: 0.875rem;     /* 14px - Navigation */
  --font-size-base: 1rem;       /* 16px - Body text */
  --font-size-lg: 1.125rem;     /* 18px - Intro text */
  --font-size-xl: 1.25rem;      /* 20px - Logo */
  --font-size-2xl: 1.5rem;      /* 24px - Card titles */
  --font-size-3xl: 1.875rem;    /* 30px - Section headings */
  --font-size-4xl: 2.25rem;     /* 36px - Page titles */
  --font-size-5xl: 3rem;        /* 48px - Hero title */
  --font-size-6xl: 3.75rem;     /* 60px - Large hero */
}
```

**To make text larger/smaller:**
- Increase the `rem` value to make larger
- Decrease to make smaller
- Example: Change body text from `1rem` to `1.125rem` for larger text

### Customizing Product Card Shadows:

**File:** `css/styles.css` (around line 430)

```css
.card {
  box-shadow: 8px 8px 0px var(--color-olive);
}
```

**To adjust:**
- First `8px` = Shadow offset to the RIGHT
- Second `8px` = Shadow offset to the BOTTOM
- `0px` = Blur amount (0 = solid, no blur)
- `var(--color-olive)` = Color (uses green accent)

**Examples:**
```css
/* Larger shadow */
box-shadow: 12px 12px 0px var(--color-olive);

/* Smaller shadow */
box-shadow: 4px 4px 0px var(--color-olive);

/* Shadow to bottom-left instead */
box-shadow: -8px 8px 0px var(--color-olive);
```

### Adjusting Navbar Border Thickness:

**File:** `css/styles.css` (around line 173)

```css
.nav {
  border-bottom: 4px solid var(--color-olive);
}
```

Change `4px` to make thicker/thinner:
- `2px` = Thin line
- `4px` = Current (medium-thick)
- `6px` = Very thick

### Changing Gallery Image Corners:

**File:** `css/styles.css` (around line 541)

```css
.gallery-item {
  border-radius: 4px;  /* Rounded corners */
}
```

- `0px` = Square corners
- `4px` = Subtle rounding (current)
- `8px` = More rounded
- `12px` = Very rounded

---

## 📄 Technical PDFs

Each product should have a downloadable technical sheet (PDF).

**Location:** `docs/` folder

### Current PDFs:
- `raad-type-s-ficha-tecnica.pdf` - R.A.A.D. Type S technical sheet
- `supra-ficha-tecnica.pdf` - SUPRA technical sheet
- `raad-rc-ficha-tecnica.pdf` - R.A.A.D. RC technical sheet
- `h25-ficha-tecnica.pdf` - H-25 technical sheet

### To Add a New PDF:

1. **Place PDF in docs folder:**
   - Add your PDF file to `docs/`
   - Name it clearly: `product-name-technical-sheet.pdf`
   - Use hyphens, no spaces
   - Keep it lowercase

2. **Update the product HTML page:**

**File:** Product page (e.g., `raad-type-s.html`)

Find the technical sheet section (around line 72):

```html
<div style="margin: var(--space-8) 0; padding: var(--space-4); background: var(--color-gray-100); text-align: center;">
  <h3 style="margin-bottom: var(--space-3);" data-i18n="product.technical-sheet">Ficha Técnica</h3>
  <a href="docs/raad-type-s-ficha-tecnica.pdf" class="btn btn-primary" download data-i18n="product.download-pdf">Descargar PDF</a>
</div>
```

**Update the `href`:**
```html
<a href="docs/your-new-product-sheet.pdf" class="btn btn-primary" download>
  Descargar PDF
</a>
```

### To Replace an Existing PDF:

**Option 1: Same filename**
- Simply replace the file in `docs/` folder
- Keep the exact same filename
- No code changes needed!

**Option 2: Different filename**
- Add new PDF to `docs/` folder
- Update the href in the product HTML page (as shown above)
- Delete the old PDF

**PDF Guidelines:**
- File size: Keep under 5MB
- Format: PDF only
- Content: Should include product specifications, applications, technical data
- Language: Can be bilingual or create separate Spanish/English versions

---

## 📞 Contact Information

Contact information appears in **TWO places** on the website:
1. **Contact Page** (`contacto.html`) - Full contact information
2. **Footer** (bottom of every page) - Brief contact info

### To Update Contact Info:

**You need to update ALL HTML files:**
- `index.html`
- `productos.html`
- `contacto.html`
- `raad-type-s.html`
- `supra.html`
- `raad-rc.html`
- `h-25.html`

#### Updating Address (Footer of all pages):

Find this section (around line 120-130 in each file):

```html
<div class="footer-section">
  <h4 data-i18n="footer.contact">Contacto</h4>
  <p>Ave. México - Puebla 55<br>
  Villa Olímpica<br>
  San Juan Cuautlancingo, Puebla<br>
  C.P. 72700</p>
</div>
```

Update the address lines as needed.

#### Updating Email and Phone (Footer of all pages):

```html
<div class="footer-section">
  <h4 data-i18n="footer.info">Información</h4>
  <p>ventas@tiupavimentos.com</p>
  <p>Tel: +52 (222) 329 2107</p>
  <p>Tel: +52 (222) 285 06 81</p>
</div>
```

#### Updating Contact Page Details:

**File:** `contacto.html` (around line 50-70)

**Address:**
```html
<p style="color: var(--color-gray-600); line-height: 1.8;">
  Ave. México - Puebla 55<br>
  Villa Olímpica<br>
  San Juan Cuautlancingo, Puebla<br>
  C.P. 72700
</p>
```

**Email:**
```html
<p style="color: var(--color-gray-600);">
  <a href="mailto:ventas@tiupavimentos.com" style="text-decoration: underline;">ventas@tiupavimentos.com</a>
</p>
```

**Phone:**
```html
<p style="color: var(--color-gray-600);">
  +52 (222) 329 2107<br>
  +52 (222) 285 06 81
</p>
```

### To Update Office Hours:

**File:** `contacto.html` (around line 77-85)

```html
<div style="margin-bottom: var(--space-3);">
  <p style="margin-bottom: var(--space-1);"><strong data-i18n="contact.weekdays">Lunes a Viernes</strong></p>
  <p style="color: var(--color-gray-600);">9:00 AM - 6:00 PM</p>
</div>

<div style="margin-bottom: var(--space-4);">
  <p style="margin-bottom: var(--space-1);"><strong data-i18n="contact.saturday">Sábado</strong></p>
  <p style="color: var(--color-gray-600);">9:00 AM - 2:00 PM</p>
</div>
```

Change the times as needed.

**Don't forget to update translations** in `js/i18n.js` if you change day names or add new information!

---

## 🚀 Quick Start Guide for Common Tasks

### ✅ I want to change product descriptions

1. Open the product HTML file (e.g., `raad-type-s.html`)
2. Find the paragraph with `data-i18n="raad-type-s.intro"` or similar
3. Edit the Spanish text between `<p>` and `</p>`
4. Update English translation in `js/i18n.js`
5. Save both files

**Time:** 5 minutes

---

### ✅ I want to add more product images to a gallery

1. Add your images to the product folder (e.g., `images/type-s/`)
2. Open the product HTML file (e.g., `raad-type-s.html`)
3. Find the `<div class="gallery">` section
4. Copy an existing gallery item:
   ```html
   <div class="gallery-item" onclick="openLightbox('images/type-s/NEW-IMAGE.jpg')">
     <img src="images/type-s/NEW-IMAGE.jpg" alt="Application photo">
   </div>
   ```
5. Paste it, update the image filename in BOTH places
6. Repeat for each new image
7. Save the file

**Time:** 2 minutes per image

---

### ✅ I want to change the green color throughout the site

1. Open `css/styles.css`
2. Find `:root {` section (around line 6)
3. Change these two lines:
   ```css
   --color-olive: #A1B668;        /* Change to your color */
   --color-olive-dark: #8a9e56;   /* Change to darker version */
   ```
4. Save the file
5. Refresh your browser

**Time:** 2 minutes

---

### ✅ I want to update the company address

1. Search for `Ave. México - Puebla 55` in ALL HTML files
2. Replace with your new address in each file:
   - index.html
   - productos.html
   - contacto.html
   - raad-type-s.html
   - supra.html
   - raad-rc.html
   - h-25.html
3. Save all files

**Time:** 10 minutes

**Tip:** Use "Find and Replace All" in your text editor to do this quickly!

---

### ✅ I want to change a product card image

1. Add your new image to the product folder (e.g., `images/supra/`)
2. Open `productos.html`
3. Find the product card section
4. Update the image path:
   ```html
   <!-- Before -->
   <img src="images/supra/IMG_0422.JPG" alt="SUPRA" class="card-image">

   <!-- After -->
   <img src="images/supra/new-card-image.jpg" alt="SUPRA" class="card-image">
   ```
5. Save the file

**Time:** 3 minutes

---

### ✅ I want to add a completely new product

1. **Create image folder:** `images/new-product/`
2. **Add images** to the folder (at least 3-5 gallery images)
3. **Copy product page:** Duplicate `raad-type-s.html` → `new-product.html`
4. **Edit new page:**
   - Update title, intro, description
   - Update gallery images
   - Update PDF link
5. **Add to productos.html:** Add new product card
6. **Add translations:** Update `js/i18n.js` with new product text
7. **Add PDF:** Place technical sheet in `docs/` folder

**Time:** 30-45 minutes

---

## 🆘 Troubleshooting

### ❌ Images not showing

**Possible causes:**
- Image path is incorrect
- Filename doesn't match exactly (case-sensitive!)
- Image is not in the right folder

**Solution:**
1. Check the image exists in the folder
2. Verify the path in HTML matches exactly
3. Check for typos in the filename
4. Make sure extension is correct (.jpg vs .JPG)

---

### ❌ Text not translating

**Possible causes:**
- Missing translation key in `i18n.js`
- Key name doesn't match exactly
- Syntax error in `i18n.js`

**Solution:**
1. Check `data-i18n="key.name"` in HTML
2. Verify the key exists in BOTH `es: {}` and `en: {}` sections in `i18n.js`
3. Make sure the key names match EXACTLY
4. Check for missing commas or quotes in `i18n.js`

---

### ❌ Changes not appearing

**Possible causes:**
- Browser cache
- File not saved
- Wrong file edited

**Solution:**
1. Make sure you saved the file (Ctrl+S / Cmd+S)
2. Hard refresh the browser:
   - **Windows:** Ctrl + Shift + R
   - **Mac:** Cmd + Shift + R
3. Clear browser cache
4. Try opening in incognito/private window

---

### ❌ PDF not downloading

**Possible causes:**
- PDF doesn't exist in `docs/` folder
- Filename in HTML doesn't match actual filename
- PDF is corrupted

**Solution:**
1. Check PDF exists in `docs/` folder
2. Verify filename matches exactly in HTML `href="docs/filename.pdf"`
3. Try opening the PDF directly to ensure it's not corrupted
4. Make sure filename has no spaces

---

### ❌ Green color not changing

**Possible causes:**
- Changed wrong variable
- Didn't save CSS file
- Browser cache

**Solution:**
1. Make sure you changed `--color-olive` AND `--color-olive-dark`
2. Save `css/styles.css`
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Check you edited the `:root {}` section, not somewhere else

---

## 📝 Important Notes

### Font
- **Font family:** Adobe Caslon Pro
- **Loaded from:** Adobe Fonts (Typekit)
- **Fallbacks:** Caslon, Libre Baskerville, Georgia, serif
- **If font doesn't load:** Will automatically use fallback serif fonts

### Layout
- **Products page:** 2x2 grid on desktop, 1 column on mobile
- **Max content width:** 1200px (home), 1000px (product pages)
- **Responsive breakpoints:** 768px (tablet), 480px (mobile)

### Design Philosophy
- **Not ultra-minimal:** Cards have creative shadows and visual interest
- **Professional:** Adobe Caslon font, generous whitespace
- **Color accent:** Olive green (#A1B668) used tastefully throughout
- **Interactive:** Hover effects on cards, navigation, images

### Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- **Fast loading:** No framework, minimal JavaScript
- **Image optimization:** Compress large images for faster loading
- **Recommended tool:** TinyPNG.com for image compression

---

## 💡 Best Practices

### When Adding Content:

1. **Always add translations** for new text in both Spanish and English
2. **Test on mobile** after making changes (use browser dev tools)
3. **Optimize images** before adding (compress to reduce file size)
4. **Use descriptive filenames** for images and files
5. **Keep backups** before making major changes

### Image Guidelines:

1. **Compress before uploading** (use TinyPNG, ImageOptim, or similar)
2. **Use consistent naming** (all lowercase, hyphens instead of spaces)
3. **Choose appropriate formats:**
   - JPG for photos
   - PNG for logos/graphics with transparency
4. **Size appropriately:**
   - Gallery images: 1200px wide maximum
   - Card images: 800px wide minimum
   - Hero background: 1920px wide minimum

### Code Guidelines:

1. **Always save files** before testing
2. **Test changes incrementally** (don't change 10 things at once)
3. **Keep the structure** - don't delete sections you don't understand
4. **Match indentation** when copying code blocks
5. **Close all tags** - every `<div>` needs a `</div>`

---

## 🔧 Advanced Customization

### Changing the Font

**Current:** Adobe Caslon Pro

**To change to a different font:**

1. **If using Google Fonts:**
   - Go to [fonts.google.com](https://fonts.google.com)
   - Select your font
   - Copy the `<link>` tag
   - Add to `<head>` of all HTML files
   - Update `css/styles.css`:
   ```css
   :root {
     --font-sans: "Your Font Name", serif;
   }
   ```

2. **If using a system font:**
   - Update `css/styles.css`:
   ```css
   :root {
     --font-sans: Georgia, "Times New Roman", serif;
   }
   ```

### Adjusting Card Shadow Style

**Current:** Solid offset shadow (creative, non-minimal)

**To change shadow style:**

Find in `css/styles.css` (around line 430):

```css
/* Current: Solid offset shadow */
.card {
  box-shadow: 8px 8px 0px var(--color-olive);
}

/* Option 1: Soft blurred shadow (more minimal) */
.card {
  box-shadow: 0 4px 12px rgba(161, 182, 104, 0.2);
}

/* Option 2: Multiple layered shadows (more depth) */
.card {
  box-shadow:
    8px 8px 0px var(--color-olive),
    0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Option 3: No shadow (ultra-minimal) */
.card {
  box-shadow: none;
  border: 2px solid var(--color-gray-200);
}
```

### Adding More Navigation Links

**To add a new page to the navigation:**

1. Create your new page (e.g., `about.html`)
2. Add to navbar in ALL HTML files:

```html
<ul class="nav-menu">
  <li><a href="index.html" class="nav-link" data-i18n="nav.home">Inicio</a></li>
  <li><a href="productos.html" class="nav-link" data-i18n="nav.products">Productos</a></li>
  <li><a href="about.html" class="nav-link" data-i18n="nav.about">Nosotros</a></li> <!-- NEW -->
  <li><a href="contacto.html" class="nav-link" data-i18n="nav.contact">Contacto</a></li>
  <li><button class="lang-toggle" onclick="toggleLanguage()">EN / ES</button></li>
</ul>
```

3. Add translations to `js/i18n.js`:
```javascript
es: { "nav.about": "Nosotros" },
en: { "nav.about": "About Us" }
```

---

## 📋 Checklist for New Product

Use this checklist when adding a new product:

- [ ] Create image folder: `images/product-name/`
- [ ] Add 3-5 gallery images to folder
- [ ] Choose one image for product card
- [ ] Create product page HTML file (copy existing)
- [ ] Update page title and meta description
- [ ] Update product name (H1)
- [ ] Update intro paragraph
- [ ] Update full description
- [ ] Add all gallery items with correct paths
- [ ] Add/update PDF link
- [ ] Add product card to `productos.html`
- [ ] Add translations to `js/i18n.js` (Spanish)
- [ ] Add translations to `js/i18n.js` (English)
- [ ] Add PDF file to `docs/` folder
- [ ] Test page on desktop
- [ ] Test page on mobile
- [ ] Test image lightbox
- [ ] Test PDF download
- [ ] Test language toggle

---

## 📧 Need Help?

If you encounter any issues or need assistance:

1. **Check this README** for solutions
2. **Check the Troubleshooting section** above
3. **Try searching online** for the specific error
4. **Contact your developer** if you're stuck

Common search terms:
- "How to change image in HTML"
- "How to edit CSS colors"
- "HTML image not showing"
- "How to add translation to website"

---

## 📖 Glossary

**Terms you might see in the code:**

- **HTML** - The structure and content of the pages
- **CSS** - The styling and design (colors, fonts, layout)
- **JavaScript** - Interactive features (language toggle, lightbox)
- **Hex color** - Color code like #A1B668
- **RGB/RGBA** - Color format: rgba(161, 182, 104, 0.1)
- **px** - Pixels (screen measurement)
- **rem** - Relative unit for font sizes
- **data-i18n** - Translation key attribute
- **class** - CSS style identifier
- **href** - Link destination
- **src** - Image source path
- **alt** - Image description (for accessibility)

---

**Last Updated:** 2025
**Version:** 2.0
**Website:** TIU Pavimentos
**Built with:** HTML5, CSS3, JavaScript (ES6)
**Design:** Adobe Caslon Pro, Olive Green Accents, Creative Shadows
