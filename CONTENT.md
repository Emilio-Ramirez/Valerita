# 📝 Content Editing Guide - TIU Pavimentos

This guide shows you exactly what content exists on the website and how to edit it.

---

## 📁 Website Structure

```
Website Pages:
├── Home (index.html)
│   ├── Hero section with background image
│   ├── About Us section
│   └── Technology section
│
├── Products Page (productos.html)
│   └── 4 product cards in 2x2 grid
│
├── Individual Product Pages
│   ├── R.A.A.D. Type S (raad-type-s.html)
│   ├── SUPRA (supra.html)
│   ├── R.A.A.D. RC / TractionShield (raad-rc.html)
│   └── H-25 (h-25.html)
│
└── Contact (contacto.html)
    ├── Contact information
    └── Office hours
```

---

## 🏠 HOME PAGE (index.html)

### Hero Section
**Location:** Lines 35-41

**Current Content:**
- **Title (Spanish):** "Soluciones Innovadoras para Pavimentos"
- **Title (English):** "Innovative Solutions for Pavements"
- **Subtitle (Spanish):** "Tecnología de vanguardia para pavimentos duraderos y seguros"
- **Subtitle (English):** "Cutting-edge technology for durable and safe pavements"
- **Background Image:** `images/hero/hero-bg.jpg`

**To Change:**
1. Open `index.html`
2. Find the hero section
3. Edit the text between the tags
4. Update translations in `js/i18n.js` for both ES and EN

---

### About Us Section
**Location:** Lines 44-51

**Current Content (Spanish):**
```
Somos una empresa dedicada a ofrecer soluciones innovadoras que
fortalecen la seguridad y prolongan la vida útil de los pavimentos.
Combinamos materiales de la más alta calidad con tecnologías de
vanguardia a nivel mundial para garantizar resultados duraderos,
eficientes y sostenibles.
```

**To Change:**
1. Open `index.html`
2. Find "Quiénes Somos" section
3. Edit the paragraph text
4. Update translation in `js/i18n.js`

---

### Technology Section
**Location:** Lines 54-67

**Current Content:**
- 3 paragraphs explaining the technology
- Background color: Light gray

**To Change:**
1. Open `index.html`
2. Find "Nuestra Tecnología" section
3. Edit the paragraph texts
4. Update translations in `js/i18n.js`

---

## 🛍️ PRODUCTS PAGE (productos.html)

### Product 1: R.A.A.D. Type S
**Location:** Lines 48-57

**Current Content:**
- **Card Image:** `images/type-s/IMG_0123.JPG`
- **Title:** "R.A.A.D. Type S"
- **Description (Spanish):** "Tratamiento superficial que protege e impermeabiliza pavimentos asfálticos con nanotecnología."
- **Description (English):** "Surface treatment that protects and waterproofs asphalt pavements with nanotechnology."
- **Links to:** `raad-type-s.html`

**Image Folder:** `images/type-s/` (23 images total)

**To Change Card Image:**
1. Open `productos.html`
2. Find line ~51: `<img src="images/type-s/IMG_0123.JPG"`
3. Replace `IMG_0123.JPG` with your new image filename

---

### Product 2: SUPRA
**Location:** Lines 60-69

**Current Content:**
- **Card Image:** `images/supra/IMG_0422.JPG`
- **Title:** "SUPRA"
- **Description (Spanish):** "Aplicación superficial con base asfáltica modificada que restaura pavimentos moderadamente deteriorados."
- **Description (English):** "Surface application with modified asphalt base that restores moderately deteriorated pavements."
- **Links to:** `supra.html`

**Image Folder:** `images/supra/` (17 images total)

---

### Product 3: R.A.A.D. RC (TractionShield)
**Location:** Lines 72-81

**Current Content:**
- **Card Image:** `images/tractionshield/IMG_0783.JPG`
- **Title:** "R.A.A.D. RC"
- **Description (Spanish):** "TractionShield - Sellador asfáltico ecológico en base agua que se integra al pavimento sellando superficies con alta eficiencia."
- **Description (English):** "TractionShield - Eco-friendly water-based asphalt sealer that integrates with pavement sealing surfaces with high efficiency."
- **Links to:** `raad-rc.html`

**Image Folder:** `images/tractionshield/` (5 images total)

---

### Product 4: H-25
**Location:** Lines 84-93

**Current Content:**
- **Card Image:** `images/h25/IMG_6584.jpg`
- **Title:** "H-25"
- **Description (Spanish):** "Aditivo de hidrocarburos modificados que mejora la superficie de pavimentos, seguro, duradero y de secado rápido."
- **Description (English):** "Modified hydrocarbon additive that improves pavement surface, safe, durable and fast-drying."
- **Links to:** `h-25.html`

**Image Folder:** `images/h25/` (5 images total)

---

## 📄 PRODUCT DETAIL PAGES

### R.A.A.D. Type S (raad-type-s.html)

**Product Title:** Line 39
```html
<h1>R.A.A.D. Type S</h1>
```

**Intro Paragraph:** Lines 41-43
```
Este tratamiento superficial está diseñado para proteger e
impermeabilizar pavimentos asfálticos, proporcionando una
superficie de rodamiento cómoda y segura en carreteras,
zonas urbanas y pistas de aeropuertos.
```

**Main Description:** Lines 45-47
```
Desarrollado en Estados Unidos por Carbonyte Inc., incorpora
nanotecnología en su estructura...
```

**Gallery Images:** Lines 80-104
- **Total images:** 8 shown in gallery
- **Available images:** 23 in `images/type-s/` folder

**Current Gallery Images:**
1. IMG_0123.JPG
2. IMG_6472.jpg
3. IMG_8720.jpg
4. IMG_8734.jpg
5. IMG_9826.jpg
6. IMG_9828.jpg
7. F47C7C04-7EF9-4393-A34A-6F18682D0A98.jpg
8. PHOTO-2024-03-05-17-34-28.jpg

**To Add More Images:**
1. Images are already in `images/type-s/` folder
2. Open `raad-type-s.html`
3. Go to gallery section (line ~79)
4. Copy this block and update the image filename:
```html
<div class="gallery-item" onclick="openLightbox('images/type-s/YOUR-IMAGE.jpg')">
  <img src="images/type-s/YOUR-IMAGE.jpg" alt="R.A.A.D. Type S">
</div>
```

**Available Images to Add:**
- PHOTO-2023-11-30-09-15-13.jpg
- PHOTO-2023-12-18-18-15-06.jpg
- PHOTO-2023-12-18-18-21-25.jpg
- PHOTO-2024-07-18-13-56-19.jpg
- PHOTO-2024-09-19-08-01-02.jpg
- PHOTO-2024-10-17-11-22-53.jpg
- And 10 more images!

---

### SUPRA (supra.html)

**Product Title:** Line 39
```html
<h1>SUPRA</h1>
```

**Intro Paragraph:** Lines 41-43
```
Aplicación superficial con base asfáltica modificada con
polímeros y fibras cerámicas que restaura pavimentos
moderadamente deteriorados, ofreciendo alta resistencia,
durabilidad y una superficie segura.
```

**Gallery Images:** Lines 58-88
- **Total images:** 10 shown in gallery
- **Available images:** 17 in `images/supra/` folder

**Current Gallery Images:**
1. IMG_0422.JPG
2. IMG_0423.JPG
3. IMG_0425.JPG
4. IMG_0426.JPG
5. IMG_3006.JPG
6. IMG_3037.JPG
7. IMG_5720.jpg
8. IMG_5740.jpg
9. IMG_6737.jpg
10. IMG_7669.jpg

**Available Images to Add:**
- IMG_4012.JPG
- IMG_7680.jpg
- IMG_8720.jpg
- IMG_8721.jpg
- IMG_8725.jpg
- 22977489-186e-4194-b9e8-28d209c61689.jpg
- ffdff5aa-ba63-447e-a573-9371655ae136.jpg

---

### R.A.A.D. RC / TractionShield (raad-rc.html)

**Product Titles:** Lines 39-40
```html
<h1>R.A.A.D. RC</h1>
<h2>TractionShield</h2>
```

**Intro Paragraph:** Lines 42-44
```
TractionShield es un sellador asfáltico plural y reactivo
a base de asfaltos modificados con polímeros, ecológico y
en base agua, que se integra al pavimento sellando superficies
con alta eficiencia, seguridad y sostenibilidad.
```

**Gallery Images:** Lines 59-74
- **Total images:** 5 shown (all available)
- **All images:** 5 in `images/tractionshield/` folder

**Current Gallery Images:**
1. IMG_0783.JPG
2. IMG_1601.JPG
3. IMG_4012.JPG
4. 967203d8-b6f4-4344-ba3e-95441cdb95bb.jpg
5. PHOTO-2024-05-03-14-16-42.jpg

---

### H-25 (h-25.html)

**Product Title:** Line 39
```html
<h1>H-25</h1>
```

**Intro Paragraph:** Lines 41-43
```
Es un aditivo de hidrocarburos modificados con termoplástico
de alto peso molecular derivado del asfalto, que mejora la
superficie de pavimentos, es seguro (sin HAP), duradero, de
secado rápido y aplicable en distintas condiciones.
```

**Gallery Images:** Lines 58-73
- **Total images:** 5 shown (all available)
- **All images:** 5 in `images/h25/` folder

**Current Gallery Images:**
1. IMG_6584.jpg
2. IMG_6570.jpg
3. IMG_6586.jpg
4. IMG_9617.jpg
5. IMG_9619.jpg

---

## 📞 CONTACT PAGE (contacto.html)

### Contact Information
**Location:** Lines 49-70

**Current Content:**

**Address:**
```
Ave. México - Puebla 55
Villa Olímpica
San Juan Cuautlancingo, Puebla
C.P. 72700
```

**Email:**
```
ventas@tiupavimentos.com
```

**Phone:**
```
+52 (222) 329 2107
+52 (222) 285 06 81
```

---

### Office Hours
**Location:** Lines 77-85

**Current Content:**

**Monday to Friday:**
```
9:00 AM - 6:00 PM
```

**Saturday:**
```
9:00 AM - 2:00 PM
```

**To Change:**
1. Open `contacto.html`
2. Find the hours section
3. Edit the time text
4. Update translations in `js/i18n.js` if needed

---

## 🎨 VISUAL ELEMENTS

### Logo
**Location:** `images/logo/logo.png`
**Used in:** All pages (navbar)
**Size:** 45px height
**Format:** PNG with transparent background

**To Replace:**
1. Save your new logo as `logo.png`
2. Replace the file in `images/logo/`
3. Keep the same filename

---

### Hero Background
**Location:** `images/hero/hero-bg.jpg`
**Used in:** Home page hero section
**Current:** Pavement/runway professional photo
**Recommended size:** 1920x1080 or larger

**To Replace:**
1. Save your new image as `hero-bg.jpg`
2. Replace the file in `images/hero/`
3. Keep the same filename

---

## 🌍 TRANSLATIONS

All text content has both Spanish and English versions stored in `js/i18n.js`.

### How to Edit Translations:

1. **Open** `js/i18n.js`
2. **Find** the translation key (e.g., `"hero.title"`)
3. **Edit** both versions:

```javascript
es: {
  "hero.title": "Your Spanish text here"
},
en: {
  "hero.title": "Your English text here"
}
```

### Common Translation Keys:

**Navigation:**
- `nav.home` - Home link
- `nav.products` - Products link
- `nav.contact` - Contact link

**Hero:**
- `hero.title` - Main hero title
- `hero.subtitle` - Hero subtitle

**About:**
- `about.title` - "Who We Are" heading
- `about.p1` - About paragraph

**Products:**
- `products.title` - "Our Products"
- `products.type-s.short` - Type S card description
- `products.supra.short` - SUPRA card description
- `products.rc.short` - RC card description
- `products.h25.short` - H-25 card description

**Footer:**
- `footer.company` - Company name
- `footer.tagline` - Tagline
- `footer.contact` - Contact heading
- `footer.info` - Information heading
- `footer.rights` - Rights reserved text

---

## 📊 IMAGE INVENTORY

### Product Image Folders

**images/type-s/** (23 images)
```
✓ IMG_0123.JPG (Used as card image)
✓ IMG_6472.jpg (In gallery)
✓ IMG_8720.jpg (In gallery)
✓ IMG_8734.jpg (In gallery)
✓ IMG_9826.jpg (In gallery)
✓ IMG_9828.jpg (In gallery)
✓ F47C7C04-7EF9-4393-A34A-6F18682D0A98.jpg (In gallery)
✓ PHOTO-2024-03-05-17-34-28.jpg (In gallery)
○ PHOTO-2023-11-30-09-15-13.jpg (Available)
○ PHOTO-2023-12-18-18-15-06.jpg (Available)
○ PHOTO-2023-12-18-18-21-25 6.jpg (Available)
○ PHOTO-2023-12-18-18-21-25.jpg (Available)
○ PHOTO-2024-07-18-13-56-19 2.jpg (Available)
○ PHOTO-2024-07-18-13-56-19.jpg (Available)
○ PHOTO-2024-09-19-08-01-02.jpg (Available)
○ PHOTO-2024-10-17-11-22-53 2.jpg (Available)
○ PHOTO-2024-10-17-11-22-53.jpg (Available)
○ PHOTO-2025-08-08-18-25-32 2.jpg (Available)
○ PHOTO-2025-08-21-07-20-07.jpg (Available)
○ PHOTO-2025-09-18-13-39-34.jpg (Available)
○ a99c844d-e1da-48ee-b483-e2619bdfc931.jpg (Available)
○ b16cdb0a-cb2f-4ac5-8594-eaae04ca97c8.jpg (Available)
○ ef333e97-7378-4721-b812-f5b0bfa4119e.jpg (Available)
```

**images/supra/** (17 images)
```
✓ IMG_0422.JPG (Used as card image)
✓ IMG_0423.JPG (In gallery)
✓ IMG_0425.JPG (In gallery)
✓ IMG_0426.JPG (In gallery)
✓ IMG_3006.JPG (In gallery)
✓ IMG_3037.JPG (In gallery)
✓ IMG_5720.jpg (In gallery)
✓ IMG_5740.jpg (In gallery)
✓ IMG_6737.jpg (In gallery)
✓ IMG_7669.jpg (In gallery)
○ IMG_4012.JPG (Available)
○ IMG_7680.jpg (Available)
○ IMG_8720.jpg (Available)
○ IMG_8721.jpg (Available)
○ IMG_8725.jpg (Available)
○ 22977489-186e-4194-b9e8-28d209c61689.jpg (Available)
○ ffdff5aa-ba63-447e-a573-9371655ae136.jpg (Available)
```

**images/tractionshield/** (5 images - all in use)
```
✓ IMG_0783.JPG (Card image + gallery)
✓ IMG_1601.JPG (In gallery)
✓ IMG_4012.JPG (In gallery)
✓ 967203d8-b6f4-4344-ba3e-95441cdb95bb.jpg (In gallery)
✓ PHOTO-2024-05-03-14-16-42.jpg (In gallery)
```

**images/h25/** (5 images - all in use)
```
✓ IMG_6584.jpg (Card image + gallery)
✓ IMG_6570.jpg (In gallery)
✓ IMG_6586.jpg (In gallery)
✓ IMG_9617.jpg (In gallery)
✓ IMG_9619.jpg (In gallery)
```

---

## ✏️ QUICK EDIT CHECKLIST

### To Change Product Description:
- [ ] Open the product HTML file (e.g., `raad-type-s.html`)
- [ ] Find the intro or description paragraph
- [ ] Edit the Spanish text
- [ ] Open `js/i18n.js`
- [ ] Update the English translation
- [ ] Save both files
- [ ] Refresh browser to test

### To Add Gallery Image:
- [ ] Check image exists in product folder
- [ ] Open product HTML file
- [ ] Find the `<div class="gallery">` section
- [ ] Copy an existing gallery item block
- [ ] Paste and update the image filename (2 places)
- [ ] Save file
- [ ] Refresh browser to test

### To Change Card Image:
- [ ] Choose new image from product folder
- [ ] Open `productos.html`
- [ ] Find the product card section
- [ ] Update the `src="images/..."` path
- [ ] Save file
- [ ] Refresh browser to test

### To Update Contact Info:
- [ ] Open ALL 7 HTML files
- [ ] Search for current address/email/phone
- [ ] Replace with new information
- [ ] Save all files
- [ ] Test on multiple pages

---

## 🎯 TIPS

1. **Always test changes** by refreshing the page in your browser
2. **Update translations** when changing text with `data-i18n` attribute
3. **Keep image names simple** - no spaces, use hyphens
4. **Back up files** before making major changes
5. **Hard refresh** browser if changes don't appear: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

**Last Updated:** 2025
**For:** Valeria / TIU Pavimentos Website
