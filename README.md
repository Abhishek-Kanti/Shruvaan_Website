# DETONATE Research Website

A professional static website for presenting the research paper "A Benchmark for Text-to-Image Alignment and Kernelized Direct Preference Optimization" (DETONATE).

## 🚀 Features

- **Static HTML/CSS/JS** - No build process required, deploy directly to GitHub Pages
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices  
- **Professional Layout** - Clean, modern design matching academic standards
- **Interactive Elements** - Clickable Paper and Code buttons with hover effects
- **Placeholder Content** - Academic-style content that can be easily customized

## 📁 File Structure

```
/
├── index.html          # Main page (GitHub Pages ready)
├── css/
│   └── style.css      # All styling
├── js/
│   └── script.js      # Interactive functionality
└── README.md          # This file
```

## 🔧 Setup Instructions

### Local Development
1. Clone this repository
2. Open `index.html` in your web browser
3. The website works completely offline - no server required!

### GitHub Pages Deployment
1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → "main" → "/ (root)"
4. Your site will be available at `https://your-username.github.io/your-repo-name`

## ✏️ Customization Guide

### 1. Update Paper and Code Links
In `js/script.js`, replace the placeholder URLs:

```javascript
// Update these with your actual links
updateLinks(
    'https://arxiv.org/abs/your-paper-id',        // Paper URL
    'https://github.com/your-username/your-repo'   // Code URL
);
```

### 2. Replace Content
- **Title & Authors**: Edit the content in `index.html` header section
- **Abstract**: Replace the placeholder text in the abstract section
- **Institution**: Update affiliation information

### 3. Add Technical Images
- Create an `images/` folder
- Add your technical diagrams and replace the placeholder boxes
- Update image references in the HTML

### 4. Customize Styling
- **Colors**: Modify CSS variables in `css/style.css`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Layout**: Adjust spacing and sizing in the CSS file

## 📱 Responsive Behavior

The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side elements
- **Tablet**: Balanced layout with appropriate scaling  
- **Mobile**: Stacked layout with touch-friendly interactions

## 🎨 Design Features

- **Professional Typography** - Inter font family for excellent readability
- **Interactive Elements** - Hover effects and smooth transitions
- **Visual Hierarchy** - Clear section separation and content flow
- **Academic Standards** - Layout follows research paper presentation conventions

## 🛠️ Technical Details

- **No Dependencies** - Pure HTML/CSS/JS, no frameworks required
- **Cross-Browser Compatible** - Works in all modern browsers
- **Accessibility** - Semantic HTML structure and proper contrast ratios
- **Performance** - Lightweight and fast loading

## 📧 Support

For questions about customization or deployment, refer to the GitHub Pages documentation or create an issue in this repository.

---

**Ready to showcase your research!** 🎓