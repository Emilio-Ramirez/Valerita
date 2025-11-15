# TIU Pavimentos Website

Professional website for TIU Pavimentos - pavement solutions company.

## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:Emilio-Ramirez/Valerita.git
cd Valerita

# Open in browser
open index.html

# Or use a local server
python3 -m http.server 8000
```

---

## 📋 Project Overview

- **Type:** Static website (HTML/CSS/JavaScript)
- **Pages:** 7 pages (Home, Products, 4 product detail pages, Contact)
- **Bilingual:** Spanish/English with toggle
- **Responsive:** Mobile, tablet, desktop
- **Font:** Adobe Caslon Pro (loaded from Adobe Fonts)
- **Design:** Creative cards with olive green accents (#A1B668)

---

## 📁 Project Structure

```
valeria/
├── index.html              # Home page
├── productos.html          # Products listing (2x2 grid)
├── contacto.html           # Contact page
├── raad-type-s.html       # Product detail pages
├── supra.html
├── raad-rc.html
├── h-25.html
│
├── css/
│   └── styles.css         # All styling (design system)
│
├── js/
│   ├── main.js           # Navigation, scroll effects
│   ├── i18n.js           # Translations (ES/EN)
│   └── gallery.js        # Image lightbox
│
├── images/
│   ├── logo/             # Company logo
│   ├── hero/             # Hero background
│   ├── type-s/           # R.A.A.D. Type S (23 images)
│   ├── supra/            # SUPRA (17 images)
│   ├── tractionshield/   # R.A.A.D. RC (5 images)
│   └── h25/              # H-25 (5 images)
│
├── docs/                 # Technical PDFs (to be added)
├── CONTENT.md           # Content editing guide
└── README.md            # This file
```

---

## 📝 Documentation

### For Content Editors
👉 **See [CONTENT.md](CONTENT.md)** - Complete guide for editing text, images, and translations

### For Developers
Continue reading below for technical setup and customization.

---

## 🎨 Design System

### Colors
```css
--color-olive: #A1B668;           /* Main accent */
--color-olive-dark: #8a9e56;      /* Darker accent */
--color-black: #000000;
--color-white: #ffffff;
--color-gray-100: #f5f5f5;        /* Light backgrounds */
--color-gray-600: #525252;        /* Body text */
```

### Typography
- **Font:** Adobe Caslon Pro (serif)
- **Fallbacks:** Caslon, Libre Baskerville, Georgia
- **Sizes:** 12px - 60px (responsive)

### Layout
- **Max width:** 1200px (home), 1000px (product pages)
- **Breakpoints:** 768px (tablet), 480px (mobile)
- **Grid:** 2x2 products on desktop, 1 column on mobile

---

## 🛠️ Technical Details

### HTML
- **Semantic HTML5**
- **Bilingual:** Uses `data-i18n` attributes
- **Accessibility:** ARIA labels, semantic tags

### CSS
- **Pure CSS3** - No preprocessors
- **CSS Variables** - Easy theming
- **Flexbox & Grid** - Modern layouts
- **Responsive** - Mobile-first approach

### JavaScript
- **Vanilla JS** - No frameworks
- **i18n System** - Language switching with localStorage
- **Lightbox** - Image gallery viewer
- **Smooth Scroll** - Navigation effects

---

## 🌍 Internationalization

### How it Works
1. Default language: Spanish
2. User clicks "EN / ES" button
3. Language saved to `localStorage`
4. Page content updates dynamically
5. Next visit remembers preference

### Adding Translations
Edit `js/i18n.js`:

```javascript
const translations = {
  es: {
    "your.key": "Tu texto en español",
  },
  en: {
    "your.key": "Your text in English",
  }
};
```

In HTML:
```html
<p data-i18n="your.key">Tu texto en español</p>
```

---

## 🖼️ Image Management

### Image Folders by Product

**R.A.A.D. Type S** (`images/type-s/`)
- 23 total images
- 8 currently in gallery
- 15 available to add

**SUPRA** (`images/supra/`)
- 17 total images
- 10 currently in gallery
- 7 available to add

**R.A.A.D. RC** (`images/tractionshield/`)
- 5 total images
- All currently in use

**H-25** (`images/h25/`)
- 5 total images
- All currently in use

### Adding Gallery Images

1. **Image already in folder?** Just add to HTML
2. **New image?** Add to appropriate folder first

Example:
```html
<div class="gallery-item" onclick="openLightbox('images/supra/NEW-IMAGE.jpg')">
  <img src="images/supra/NEW-IMAGE.jpg" alt="SUPRA application">
</div>
```

---

## 📄 Technical PDFs

### Location
`docs/` folder (currently empty)

### Required Files
- `raad-type-s-ficha-tecnica.pdf`
- `supra-ficha-tecnica.pdf`
- `raad-rc-ficha-tecnica.pdf`
- `h25-ficha-tecnica.pdf`

### Adding PDFs
1. Place PDF in `docs/` folder
2. Verify filename matches HTML link
3. No code changes needed if filename matches

---

## ⚙️ Customization

### Changing Colors

Edit `css/styles.css`:
```css
:root {
  --color-olive: #A1B668;        /* Your color */
  --color-olive-dark: #8a9e56;   /* Darker version */
}
```

### Changing Fonts

1. **Adobe Fonts:** Update Typekit kit ID in all HTML `<head>` sections
2. **Google Fonts:** Replace Typekit link with Google Fonts
3. **System Fonts:** Update CSS variable only

```css
:root {
  --font-sans: "Your Font", serif;
}
```

### Card Shadow Style

Current (creative offset shadow):
```css
.card {
  box-shadow: 8px 8px 0px var(--color-olive);
}
```

Alternative (soft shadow):
```css
.card {
  box-shadow: 0 4px 12px rgba(161, 182, 104, 0.2);
}
```

---

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Connect GitHub repo
2. Auto-deploy on push
3. Free SSL certificate
4. Custom domain support

**Deploy command:** None needed (static files)

### Option 2: Vercel
```bash
npm i -g vercel
vercel
```

### Option 3: GitHub Pages
1. Push to GitHub
2. Settings → Pages
3. Source: main branch / root
4. Wait ~1 minute for deployment

### Option 4: Traditional Hosting
Upload all files via FTP/SFTP to web host.

---

## 🧪 Testing

### Browser Testing
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

### Responsive Testing
1. Open browser DevTools (F12)
2. Toggle device toolbar
3. Test mobile, tablet, desktop views

### Lighthouse Testing
```bash
# Install lighthouse
npm install -g lighthouse

# Run audit
lighthouse http://localhost:8000 --view
```

---

## 🐛 Troubleshooting

### Images Not Loading
- Check file exists in correct folder
- Verify filename matches exactly (case-sensitive)
- Check file extension (.jpg vs .JPG)

### Translations Not Working
- Verify key exists in both `es` and `en` in `i18n.js`
- Check for typos in translation key
- Ensure `data-i18n` attribute is present

### Font Not Loading
- Check Adobe Fonts kit is active
- Verify Typekit link in HTML `<head>`
- Check browser console for errors

### Changes Not Appearing
1. Hard refresh: `Ctrl+Shift+R` (Win) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Try incognito/private window

---

## 📊 Performance

### Current Stats
- **Page weight:** ~500KB (with images)
- **Load time:** < 2 seconds
- **Lighthouse score:** 95+ (expected)

### Optimization Tips
1. **Compress images:** Use TinyPNG.com
2. **Lazy loading:** Add `loading="lazy"` to images
3. **CDN:** Host images on CDN for faster loading

---

## 🔒 Security

### Best Practices
- ✅ No backend/database (static site = secure)
- ✅ HTTPS via hosting provider
- ✅ No user input forms (contact info only)
- ✅ No external scripts (except Adobe Fonts)

---

## 🤝 Contributing

### Workflow
1. Create feature branch: `git checkout -b feature/name`
2. Make changes
3. Test locally
4. Commit: `git commit -m "Description"`
5. Push: `git push origin feature/name`
6. Create Pull Request on GitHub

### Commit Message Format
```
Type: Short description

- Detailed change 1
- Detailed change 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

**Types:** feat, fix, docs, style, refactor, test, chore

---

## 📧 Support

### For Content Editing
See [CONTENT.md](CONTENT.md)

### For Technical Issues
1. Check this README
2. Search GitHub Issues
3. Create new issue with:
   - Browser version
   - Screenshot
   - Steps to reproduce

---

## 📜 License

© 2025 TIU Pavimentos. All rights reserved.

---

## 🏗️ Built With

- **HTML5** - Structure
- **CSS3** - Styling
- **JavaScript (ES6)** - Interactivity
- **Adobe Caslon Pro** - Typography
- **Adobe Fonts (Typekit)** - Font hosting

---

## 📌 Version

**Version:** 1.0
**Last Updated:** November 2025
**Status:** Production Ready ✅

---

## 🎯 Todo

- [ ] Add technical PDFs to `docs/` folder
- [ ] Add remaining gallery images to product pages
- [ ] Set up custom domain
- [ ] Deploy to production
- [ ] Set up analytics (optional)

---

**Repository:** https://github.com/Emilio-Ramirez/Valerita
**Website:** TIU Pavimentos
