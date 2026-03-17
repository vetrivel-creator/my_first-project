// ==================== GLOBAL INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initParticles();
    initSkillBars();
    initQRCode();
    initScrollReveal();
});

// ==================== QR CODE GENERATION ====================
function initQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    
    if (qrcodeContainer) {
        // Clear any existing QR code
        qrcodeContainer.innerHTML = '';
        
        // Get the current domain or use localhost for development
        const currentDomain = window.location.origin;
        const menuUrl = currentDomain + '/menu.html';
        
        // Generate QR code
        const qrcode = new QRCode(qrcodeContainer, {
            text: menuUrl,
            width: 256,
            height: 256,
            colorDark: '#00d4ff',
            colorLight: '#0a0e27',
            correctLevel: QRCode.CorrectLevel.H
        });
        
        console.log('QR Code generated for:', menuUrl);
    }
}

// ==================== PARTICLE ANIMATION ====================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        // Create particle elements
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            particle.style.animation = `particleFloat ${duration}s infinite`;
            
            // Random delay
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            // Styling
            particle.style.position = 'absolute';
            particle.style.background = 'rgba(0, 212, 255, 0.6)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            
            particlesContainer.appendChild(particle);
        }
        
        // Add CSS animation if not already defined
        if (!document.querySelector('#particle-animation-style')) {
            const style = document.createElement('style');
            style.id = 'particle-animation-style';
            style.textContent = `
                @keyframes particleFloat {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.5;
                    }
                    90% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// ==================== SKILL BAR ANIMATION ====================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    if (skillBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const skillLevel = skillBar.getAttribute('data-skill');
                    const skillFill = skillBar.querySelector('.skill-fill');
                    
                    if (skillFill && skillLevel) {
                        setTimeout(() => {
                            skillFill.style.width = skillLevel + '%';
                        }, 200);
                    }
                    
                    observer.unobserve(skillBar);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
}

// ==================== SCROLL REVEAL ANIMATION ====================
function initScrollReveal() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => observer.observe(element));
    }
}

// ==================== MENU CARD TILT EFFECT ====================
function initAnimations() {
    const menuCards = document.querySelectorAll('.menu-card[data-tilt]');
    
    menuCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ==================== COPY EMAIL FUNCTION ====================
function copyEmail() {
    const emailLink = document.getElementById('email-link');
    const copyText = document.getElementById('copy-text');
    
    if (emailLink) {
        const email = emailLink.textContent;
        
        // Create temporary input to copy text
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Update button text
        if (copyText) {
            const originalText = copyText.innerHTML;
            copyText.innerHTML = '✓ Copied!';
            copyText.style.color = '#00d4ff';
            
            setTimeout(() => {
                copyText.innerHTML = originalText;
                copyText.style.color = '';
            }, 2000);
        }
        
        console.log('Email copied:', email);
    }
}

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== MOBILE MENU TOGGLE ====================
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (navMenuBtn && navLinks) {
    navMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (window.innerWidth <= 768) {
            // On mobile, navigate to menu page
            window.location.href = 'menu.html';
        }
    });
}

// ==================== TYPING ANIMATION (OPTIONAL) ====================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Example usage (uncomment to use):
// const titleElement = document.querySelector('.page-title');
// if (titleElement) {
//     const titleText = titleElement.textContent;
//     typeWriter(titleElement, titleText, 50);
// }

// ==================== SCROLL TO TOP ====================
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scroll indicator or back-to-top button here if needed
    if (scrollTop > 300) {
        // Show back-to-top button
    } else {
        // Hide back-to-top button
    }
});

// ==================== PERFORMANCE: LAZY LOADING IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== PHOTO SLIDER WITH SWIPE ====================
let currentPhotoIndex = 0;
let photoSlides = [];
let photoDots = [];
let startX = 0;
let isDragging = false;
let autoSlideInterval = null;

// Initialize photo slider
function initPhotoSlider() {
    const slider = document.getElementById('photoSlider');
    if (!slider) return;

    photoSlides = slider.querySelectorAll('.photo-slide');
    photoDots = document.querySelectorAll('.photo-dots .dot');
    
    if (photoSlides.length === 0) return;

    // Touch events for mobile
    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchmove', handleTouchMove, { passive: true });
    slider.addEventListener('touchend', handleTouchEnd);

    // Mouse events for desktop
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseEnd);
    slider.addEventListener('mouseleave', handleMouseEnd);

    // Start auto-slide (every 4 seconds)
    startAutoSlide();

    // Pause auto-slide on hover
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
}

// Change photo (called by navigation arrows)
function changePhoto(direction) {
    stopAutoSlide();
    currentPhotoIndex += direction;
    
    if (currentPhotoIndex >= photoSlides.length) {
        currentPhotoIndex = 0;
    } else if (currentPhotoIndex < 0) {
        currentPhotoIndex = photoSlides.length - 1;
    }
    
    updatePhotoSlider();
    startAutoSlide();
}

// Set specific photo (called by dots)
function setPhoto(index) {
    stopAutoSlide();
    currentPhotoIndex = index;
    updatePhotoSlider();
    startAutoSlide();
}

// Update slider display
function updatePhotoSlider() {
    photoSlides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentPhotoIndex) {
            slide.classList.add('active');
        } else if (index < currentPhotoIndex) {
            slide.classList.add('prev');
        }
    });

    photoDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPhotoIndex);
    });
}

// Touch event handlers
function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoSlide();
}

function handleTouchMove(e) {
    if (!isDragging) return;
}

function handleTouchEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    
    // Swipe threshold: 50px
    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            // Swiped left - next photo
            changePhoto(1);
        } else {
            // Swiped right - previous photo
            changePhoto(-1);
        }
    } else {
        startAutoSlide();
    }
}

// Mouse event handlers (for desktop dragging)
function handleMouseDown(e) {
    startX = e.clientX;
    isDragging = true;
    stopAutoSlide();
}

function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
}

function handleMouseEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    
    const endX = e.clientX;
    const diffX = startX - endX;
    
    // Swipe threshold: 50px
    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            changePhoto(1);
        } else {
            changePhoto(-1);
        }
    } else {
        startAutoSlide();
    }
}

// Auto-slide functionality
function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        changePhoto(1);
    }, 6000); // Change every 6 seconds
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initParticles();
    initSkillBars();
    initQRCode();
    initScrollReveal();
    initPhotoSlider(); // Initialize photo slider
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c🚀 Portfolio Website Loaded Successfully!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #a855f7; font-size: 14px;');
console.log('%cRemember to customize the content with your information!', 'color: #00d4ff; font-size: 12px;');
