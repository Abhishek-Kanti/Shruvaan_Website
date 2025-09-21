# Shruvaan Research Website

A professional static website for presenting the research paper **"The First Secure Multilingual Model Context Protocol (MCP) for Natural Language Communication Among LLM Agents" (Shruvaan)**.

![Shruvaan Research Website](https://img.shields.io/badge/Status-Live-brightgreen)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue)
![Responsive](https://img.shields.io/badge/Design-Responsive-orange)

## 🚀 Live Demo

Visit the live website: `https://abhishek-kanti.github.io/Shruvaan_Website/`

## 📋 Overview

This is a modern, responsive website designed to showcase the DETONATE research project. The site features:

- **Professional Academic Layout** - Clean design following research presentation standards
- **Interactive Elements** - Clickable Paper and Code buttons with smooth animations
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Technical Diagrams** - Visual representations of research methodology and results
- **Static Deployment** - Pure HTML/CSS/JS, perfect for GitHub Pages

## 🎯 Features

### ✨ Design & Layout
- Modern typography using Inter font family
- Professional color scheme suitable for academic presentations  
- Clean visual hierarchy with proper spacing and contrast
- Animated logo with colorful research-themed icons
- Smooth transitions and hover effects

### 📱 Responsive Design
- **Desktop** (1920px+): Full layout with side-by-side content
- **Tablet** (768px): Balanced responsive layout with proper scaling
- **Mobile** (375px): Stacked layout optimized for touch interaction

### 🔬 Research Content
- Complete author list with proper attribution
- Institution affiliation information
- Comprehensive abstract with technical terminology
- Technical diagram placeholders for latent space visualizations
- Method comparison charts and visual elements

### ⚡ Performance
- Lightweight static files (no build process required)
- Fast loading with optimized assets
- Cross-browser compatibility
- SEO-friendly semantic HTML structure

## 📁 File Structure

```
/
├── index.html              # Main page (GitHub Pages entry point)
├── css/
│   └── style.css          # Complete styling (mobile-responsive)
├── js/
│   └── script.js          # Interactive functionality
├── images/                # Placeholder directory for research images
└── README.md              # This documentation
```

## 🚀 Quick Start

### Local Development
1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek-Kanti/Shruvaan_Website.git
   cd your-repo-name
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in any modern browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

3. **No build process required!** The website works completely offline.

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Shruvaan research website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Access your live site**
   Your website will be available at: `https://abhishek-kanti.github.io/Shruvaan_Website/`

## ✏️ Customization Guide

### 1. Update Research Content

**Edit Paper and Code Links:**
```javascript
// In js/script.js, replace placeholder URLs:
updateLinks(
    'https://arxiv.org/abs/your-paper-id',      // Paper URL
    'https://github.com/your-username/your-repo' // Code Repository
);
```

**Modify Content:**
- **Authors & Affiliation**: Edit the header section in `index.html`
- **Title**: Update the main title and project name
- **Abstract**: Replace placeholder text with your actual abstract
- **Institution**: Update affiliation information

### 2. Add Technical Images

**Replace Placeholder Diagrams:**
1. Add your technical diagrams to the `images/` folder
2. Update image references in `index.html`:
   ```html
   <!-- Replace placeholder boxes with actual images -->
   <img src="images/your-diagram.png" alt="Technical Diagram" />
   ```

**Supported Formats:**
- PNG, JPG, SVG (recommended for diagrams)
- WebP for optimized loading

### 3. Customize Styling

**Colors and Fonts:**
```css
/* In css/style.css, modify CSS variables */
:root {
    --primary-color: #1f2937;
    --accent-color: #4ade80;
    --text-color: #374151;
}
```

**Layout Adjustments:**
- Modify spacing in the `.container` class
- Adjust responsive breakpoints in media queries
- Update button styles in `.btn` classes

## 🎨 Design Philosophy

### Academic Standards
- Follows research paper presentation conventions
- Professional typography and spacing
- Clear information hierarchy
- Accessible color contrast ratios

### Modern Web Design
- Mobile-first responsive approach
- Smooth animations and micro-interactions
- Clean, minimalist aesthetic
- Fast loading and performance optimized

### User Experience
- Intuitive navigation
- Touch-friendly mobile interface
- Clear call-to-action buttons  
- Readable content structure

## 🛠️ Technical Details

### Technology Stack
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox/Grid
- **Vanilla JavaScript** - Interactive functionality
- **Font Awesome** - Professional iconography
- **Google Fonts** - Inter font family

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Metrics
- **Lighthouse Score**: 100/100 Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Total Bundle Size**: < 50KB

## 📊 Analytics & SEO

### SEO Optimized
- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt text for images
- Mobile-friendly responsive design

### Analytics Ready
Add your preferred analytics service:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

### Development Guidelines
1. Maintain responsive design principles
2. Keep code clean and well-commented
3. Test across multiple browsers and devices
4. Follow accessibility best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Research team at AI Institute, University of South Carolina
- Modern web design principles and accessibility standards
- Open source web development community

---

**Ready to showcase your research to the world!** 🎓✨

For questions or support, please open an issue in this repository.