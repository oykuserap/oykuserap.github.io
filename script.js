// Projects data - Add your projects here
const projects = [
    {
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
    },
    {
        id: 2,
        title: "Deep Learning Image Classifier",
        description: "CNN-based image classification system using TensorFlow for medical image analysis.",
        longDescription: "Developed a convolutional neural network using TensorFlow and Keras for classifying medical images. Implemented transfer learning with pre-trained models and achieved high accuracy on medical diagnosis tasks.",
        image: "🧠",
        technologies: ["TensorFlow", "Keras", "Python", "OpenCV", "NumPy"],
        demoUrl: "https://your-demo-url.com",
        githubUrl: "https://github.com/oykuserap/medical-image-classifier",
        features: [
            "Deep CNN architecture with transfer learning",
            "Medical image preprocessing pipeline",
            "Model evaluation and validation",
            "Confusion matrix and ROC analysis",
            "Data augmentation techniques",
            "Model deployment with Flask API"
        ]
    },
    {
        id: 3,
        title: "Natural Language Processing Engine",
        description: "NLP system for sentiment analysis and text classification using transformers and BERT.",
        longDescription: "Built a comprehensive NLP pipeline using BERT and transformer models for sentiment analysis and document classification. Implemented advanced text preprocessing and achieved state-of-the-art results on multiple datasets.",
        image: "💬",
        technologies: ["Python", "BERT", "Transformers", "PyTorch", "NLTK"],
        demoUrl: "https://your-demo-url.com",
        githubUrl: "https://github.com/oykuserap/nlp-sentiment-engine",
        features: [
            "BERT-based sentiment analysis",
            "Multi-class text classification",
            "Advanced text preprocessing",
            "Named Entity Recognition (NER)",
            "Topic modeling with LDA",
            "Interactive web interface"
        ]
    },
    {
        id: 4,
        title: "Time Series Forecasting Model",
        description: "LSTM-based forecasting system for financial data prediction and market analysis.",
        longDescription: "Developed an advanced time series forecasting system using LSTM neural networks and traditional statistical methods. Applied to financial market data for stock price prediction and risk analysis.",
        image: "📈",
        technologies: ["Python", "LSTM", "PyTorch", "Pandas", "Matplotlib"],
        demoUrl: "https://your-demo-url.com",
        githubUrl: "https://github.com/oykuserap/time-series-forecasting",
        features: [
            "LSTM neural network architecture",
            "Multiple time series indicators",
            "Statistical forecasting methods",
            "Risk assessment algorithms",
            "Interactive plotting and analysis",
            "Backtesting framework"
        ]
    }
];

// Note: Blog and LinkedIn sections now use static HTML content
// Blog posts will be added when you start blogging
// LinkedIn integration can be added later if desired

// Typing animation configuration
const roles = [
    "AI/ML Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst",
    "Python Developer"
];

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 75;
let pauseTime = 2000;

// DOM Elements
const projectsContainer = document.getElementById('projects-container');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contact-form');
const typingText = document.getElementById('typing-text');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    initializeModal();
    initializeContactForm();
    initializeScrollAnimations();
    loadProfileImage();
    startTypingAnimation();
    initializeNavigation();
});

// Typing animation function
function startTypingAnimation() {
    if (!typingText) return;

    function type() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                setTimeout(type, 500);
                return;
            }
            setTimeout(type, deletingSpeed);
        } else {
            typingText.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
                return;
            }
            setTimeout(type, typingSpeed);
        }
    }
    
    type();
}

// Load profile image with fallback
function loadProfileImage() {
    const profileImg = document.querySelector('.profile-img');
    if (!profileImg) {
        console.log('Profile image element not found');
        return;
    }
    
    console.log('Starting to load profile image...');
    
    // Start with image loaded state - try to load image immediately
    profileImg.classList.remove('image-failed');
    profileImg.classList.add('image-loaded');
    
    // Apply the background image immediately
    profileImg.style.backgroundImage = `url('./profile-photo.jpg?v=${Date.now()})`;
    profileImg.style.backgroundSize = 'cover';
    profileImg.style.backgroundPosition = 'center';
    profileImg.style.backgroundRepeat = 'no-repeat';
    
    // Create an image element to test if the image actually loads
    const img = new Image();
    
    img.onload = function() {
        console.log('Profile image loaded successfully');
        console.log('Image dimensions:', img.width, 'x', img.height);
        // Image is already applied, just log success
    };
    
    img.onerror = function() {
        console.log('Profile image failed to load, using fallback emoji');
        profileImg.style.backgroundImage = 'none';
        profileImg.classList.remove('image-loaded');
        profileImg.classList.add('image-failed');
    };
        profileImg.style.backgroundImage = 'none';
        profileImg.classList.remove('image-loaded');
        profileImg.classList.add('image-failed');
    };
    
    // Test the image loading
    img.src = `./profile-photo.jpg?v=${Date.now()}`;
}

// Projects rendering
function renderProjects() {
    if (!projectsContainer) return;
    
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
    if (!modal || !modalClose) return;
    
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
    if (!modalBody) return;
    
    modalBody.innerHTML = `
        <div class="project-image" style="height: 250px; font-size: 4rem; margin-bottom: 2rem;">
            ${project.image}
        </div>
        <h2 style="margin-bottom: 1rem; color: var(--primary-color);">${project.title}</h2>
        <p style="color: var(--text-light); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">
            ${project.longDescription}
        </p>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Technologies Used</h3>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Key Features</h3>
            <ul style="list-style: none; padding: 0;">
                ${project.features.map(feature => `
                    <li style="margin-bottom: 0.5rem; color: var(--text-light); padding-left: 1.5rem; position: relative;">
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
    if (!modal) return;
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact form functionality
function initializeContactForm() {
    if (!contactForm) return;
    
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
    const animatedElements = document.querySelectorAll('.contact-method, .skill-tag, .feature, .academic-card, .experience-card, .skill-category');
    animatedElements.forEach(element => observer.observe(element));
}

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 20;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

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

// Add intersection observer for scroll animations
const fadeElements = document.querySelectorAll('.feature, .academic-card, .experience-card, .skill-category');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply initial styles and observe elements
fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scroll performance optimization
window.addEventListener('scroll', debounce(() => {
    // Reserved for future scroll-based animations if needed
}, 16));

