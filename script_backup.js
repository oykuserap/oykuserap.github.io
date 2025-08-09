//    {
        id: 1,
        title: "Predictive Analytics Dashboard",
        description: "Machine learning model for predicting customer behavior with an interactive visualization dashboard.",
        longDescription: "Built a comprehensive predictive analytics system using Python and scikit-learn to forecast customer churn. Implemented multiple ML algorithms including Random Forest, XGBoost, and Neural Networks, achieving 89% accuracy. Created an interactive dashboard using Plotly and Streamlit for real-time predictions and data visualization.",
        image: "📊",
        technologies: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit"],
        demoUrl: "https://your-demo-url.com",
        githubUrl: "https://github.com/oykuserap/predictive-analytics-dashboard",
        features: [
            "Customer churn prediction with 89% accuracy",
            "Interactive data visualization dashboard",
            "Real-time model predictions",
            "Feature importance analysis",
            "A/B testing framework",
            "Automated model retraining pipeline"
        ]
    },dd your projects here
const projects = [
    {
        id: 1,
        title: "Responsive E-Commerce Site",
        description: "A modern, mobile-first e-commerce website with interactive product galleries and smooth animations.",
        longDescription: "This project showcases modern frontend development practices with responsive design, interactive product galleries, and smooth user interactions. Built with vanilla JavaScript and CSS3 animations for optimal performance.",
        image: "�️",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        demoUrl: "https://your-demo-url.com",
        githubUrl: "https://github.com/oykuserap/ecommerce-frontend",
        features: [
            "Mobile-first responsive design",
            "Interactive product image galleries",
            "Smooth CSS3 animations and transitions",
            "Shopping cart functionality",
            "Product filtering and search",
            "Cross-browser compatibility"
        ]
    },
    {
        id: 2,
        title: "React Portfolio Dashboard",
        description: "A clean, modern portfolio dashboard built with React featuring dynamic content and interactive charts.",
        longDescription: "An interactive portfolio dashboard that showcases React development skills with component-based architecture, state management, and data visualization.",
        image: "�",
        technologies: ["React", "CSS3", "Chart.js", "JavaScript"],
        demoUrl: "https://your-demo-url.com",
        githubUrl: "https://github.com/oykuserap/react-dashboard",
        features: [
            "Component-based React architecture",
            "Interactive data visualization",
            "Responsive grid layouts",
            "Dynamic content updates",
            "Modern UI design patterns",
            "Optimized performance"
        ]
    },
    {
        id: 3,
        title: "CSS Animation Showcase",
        description: "A collection of creative CSS animations and micro-interactions demonstrating advanced styling techniques.",
        longDescription: "This project demonstrates mastery of CSS3 animations, keyframes, and modern layout techniques. Features various interactive elements and smooth transitions.",
        image: "✨",
        technologies: ["CSS3", "HTML5", "SASS", "JavaScript"],
        demoUrl: "https://your-demo-url.com",
        githubUrl: "https://github.com/oykuserap/css-animations",
        features: [
            "Advanced CSS3 animations",
            "Interactive hover effects",
            "Smooth page transitions",
            "Creative loading animations",
            "Responsive micro-interactions",
            "Cross-browser animation support"
        ]
    },
    {
        id: 4,
        title: "Vue.js Weather App",
        description: "A sleek weather application built with Vue.js featuring beautiful UI and real-time weather data.",
        longDescription: "A modern weather application showcasing Vue.js development skills with component composition, API integration, and beautiful visual design.",
        image: "🌤️",
        technologies: ["Vue.js", "CSS3", "Weather API", "JavaScript"],
        demoUrl: "https://your-demo-url.com",
        githubUrl: "https://github.com/oykuserap/vue-weather-app",
        features: [
            "Vue.js component architecture",
            "Real-time weather API integration",
            "Beautiful gradient backgrounds",
            "Location-based weather search",
            "Animated weather icons",
            "Mobile-responsive design"
        ]
    }
];

// DOM Elements
const hamburger = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsContainer = document.getElementById('projects-container');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contact-form');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    initializeNavigation();
    initializeModal();
    initializeContactForm();
    initializeScrollAnimations();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Projects rendering
function renderProjects() {
    projectsContainer.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProjectModal(project);
    
    card.innerHTML = `
        <div class="project-image">${project.image}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.demoUrl}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="${project.githubUrl}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    `;
    
    return card;
}

// Modal functionality
function initializeModal() {
    modalClose.addEventListener('click', closeProjectModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    modalBody.innerHTML = `
        <div class="project-image" style="height: 250px; font-size: 4rem; margin-bottom: 2rem;">
            ${project.image}
        </div>
        <h2 style="margin-bottom: 1rem; color: #1f2937;">${project.title}</h2>
        <p style="color: #6b7280; margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">
            ${project.longDescription}
        </p>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem; color: #1f2937;">Technologies Used</h3>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem; color: #1f2937;">Key Features</h3>
            <ul style="list-style: none; padding: 0;">
                ${project.features.map(feature => `
                    <li style="margin-bottom: 0.5rem; color: #6b7280; padding-left: 1.5rem; position: relative;">
                        <i class="fas fa-check" style="position: absolute; left: 0; top: 0.2rem; color: #10b981;"></i>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="project-links" style="gap: 1rem;">
            <a href="${project.demoUrl}" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                <i class="fab fa-github"></i> View Code
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact form functionality
function initializeContactForm() {
    // Check if form has action attribute (external service like Formspree)
    if (contactForm.getAttribute('action')) {
        // Let the form submit naturally to external service
        return;
    }
    
    // Only add custom handling if no external service is configured
    contactForm.addEventListener('submit', handleContactFormSubmit);
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual form handling)
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));
    
    // Observe other elements
    const animatedElements = document.querySelectorAll('.contact-method, .skill-tag');
    animatedElements.forEach(element => observer.observe(element));
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for images (if you add real images later)
function addImageLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.remove('loading');
        });
        
        if (!img.complete) {
            img.classList.add('loading');
        }
    });
}

// Add typing effect for hero title
function initializeTypingEffect() {
    const title = document.querySelector('.hero-title');
    if (title) {
        const text = title.innerHTML;
        title.innerHTML = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                title.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);
