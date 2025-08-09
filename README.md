# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your projects and skills on GitHub Pages.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Projects**: Click on project cards to view detailed information
- **Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: Elegant navigation between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **SEO Friendly**: Optimized for search engines

## Quick Start

1. **Clone or download** this repository to your local machine
2. **Customize** the content with your information (see customization guide below)
3. **Deploy** to GitHub Pages (see deployment guide below)

## Customization Guide

### 1. Personal Information

Edit `index.html` and replace:

- `Your Name` - Replace with your actual name
- `your.email@example.com` - Replace with your email
- `https://linkedin.com/in/yourprofile` - Replace with your LinkedIn URL
- `https://github.com/yourusername` - Replace with your GitHub URL

### 2. Profile Photo

Replace the emoji in the `.profile-img::before` CSS rule in `styles.css` or add an actual image:

```css
.profile-img::before {
    content: '👨‍💻'; /* Replace with your preferred emoji or remove for image */
}
```

To use a real photo:
1. Add your image to the portfolio folder
2. Update the CSS:
```css
.profile-img {
    background-image: url('your-photo.jpg');
    background-size: cover;
    background-position: center;
}
.profile-img::before {
    display: none;
}
```

### 3. About Section

In `index.html`, update the about section with your own description and skills.

### 4. Projects

Edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Title",
        description: "Short description of your project",
        longDescription: "Detailed description for the modal",
        image: "🎯", // Emoji or image path
        technologies: ["React", "Node.js", "MongoDB"],
        demoUrl: "https://your-live-demo.com",
        githubUrl: "https://github.com/yourusername/project",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ]
    },
    // Add more projects...
];
```

### 5. Skills

Update the skills section in `index.html`:

```html
<div class="skills-grid">
    <span class="skill-tag">Your Skill</span>
    <span class="skill-tag">Another Skill</span>
    <!-- Add more skills -->
</div>
```

### 6. Colors and Styling

Customize the color scheme in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --text-color: #1f2937;
    --bg-color: #f8fafc;
}
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub
2. **Upload your files** to the repository
3. **Go to Settings** > Pages
4. **Select source**: Deploy from a branch
5. **Choose branch**: main (or master)
6. **Save** and wait for deployment

### Method 2: Using Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add GitHub repository as origin
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git push -u origin main
```

### Method 3: Using GitHub Desktop

1. **Open GitHub Desktop**
2. **Create new repository** from your portfolio folder
3. **Publish to GitHub**
4. **Enable GitHub Pages** in repository settings

## Custom Domain (Optional)

To use a custom domain:

1. **Add a CNAME file** to your repository with your domain name
2. **Configure DNS** with your domain provider
3. **Update GitHub Pages settings** to use your custom domain

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── CNAME              # Custom domain (optional)
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Tips

- Optimize images before adding them
- Keep the CSS and JS files minimal
- Use WebP format for images when possible
- Enable GitHub Pages compression

## Troubleshooting

### Common Issues

1. **Site not loading**: Check that index.html is in the root directory
2. **Images not showing**: Verify file paths and names
3. **Styling issues**: Check CSS file path in HTML
4. **JavaScript not working**: Check console for errors

### GitHub Pages Specific

- Changes may take a few minutes to appear
- Check the Actions tab for build status
- Ensure repository is public (for free GitHub accounts)

## Adding New Features

### Google Analytics

Add to the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Contact Form Backend

The current form shows a success message but doesn't send emails. To add functionality:

1. **Use Formspree**: Add `action="https://formspree.io/f/your-form-id"` to the form
2. **Use Netlify Forms**: Add `netlify` attribute to the form
3. **Use EmailJS**: Implement with JavaScript

### Dark Mode

Add a dark mode toggle by implementing CSS custom properties and JavaScript toggle functionality.

## License

Feel free to use this template for your personal portfolio. No attribution required.

## Support

If you encounter any issues or have questions, feel free to open an issue in the repository or contact me through the portfolio contact form.

---

**Happy coding! 🚀**
