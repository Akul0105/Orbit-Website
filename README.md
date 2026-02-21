# Orbit Labs - Landing Page

A modern, single-page landing page for Orbit Labs, a software company specializing in websites, automations, and business software solutions.

## Features

- 🎨 Modern, clean design inspired by Optura agency
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scrolling and animations
- 📧 Contact form with validation
- 🚀 Fast loading and optimized

## Getting Started

1. **Add Your Logo**
   - Place your Orbit Labs logo in the `assets/` folder as `logo.svg` or `logo.png`
   - The current placeholder logo will work, but replace it with your actual logo

2. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Customize Content**
   - Edit `index.html` to update text, sections, and content
   - Modify `styles.css` to change colors, fonts, and styling
   - Update `script.js` to add custom functionality

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... */
}
```

### Contact Form
The contact form currently logs to the console. To connect it to a backend:
1. Update the form submission handler in `script.js`
2. Add your API endpoint
3. Handle success/error responses

## File Structure

```
Orbit-Website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── assets/             # Images and logos
│   ├── logo.svg       # Logo file
│   └── README.md      # Logo instructions
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Orbit Labs.

