// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 46, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Nerd Terminal Effect
function createTerminalEffect() {
    const heroText = document.querySelector('.hero-text h1');
    const originalText = heroText.textContent;
    const words = originalText.split(' ');

    heroText.innerHTML = '';

    let wordIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (wordIndex < words.length) {
            const currentWord = words[wordIndex];
            if (charIndex < currentWord.length) {
                heroText.innerHTML += currentWord[charIndex];
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                heroText.innerHTML += ' ';
                wordIndex++;
                charIndex = 0;
                setTimeout(typeEffect, 200);
            }
        } else {
            // Add blinking cursor
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.style.animation = 'blink 1s infinite';
            cursor.style.color = '#00ff88';
            heroText.appendChild(cursor);
        }
    }

    setTimeout(typeEffect, 1000);
}

// Sakura Petals Generator
function createSakuraPetals() {
    const petalCount = 15;

    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'sakura-petal';
            petal.innerHTML = '🌸';
            petal.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}vw;
                font-size: ${Math.random() * 20 + 15}px;
                opacity: ${Math.random() * 0.7 + 0.3};
                pointer-events: none;
                z-index: 1000;
                animation: sakuraFloat ${Math.random() * 10 + 15}s linear infinite;
            `;

            document.body.appendChild(petal);

            // Remove petal after animation
            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 25000);
        }, i * 3000);
    }
}

// Continuous Sakura Petals for Extreme Mode
function createContinuousSakuraPetals() {
    let petalInterval;

    function createPetal() {
        const petal = document.createElement('div');
        petal.innerHTML = Math.random() > 0.5 ? '🌸' : '🌺';
        petal.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: -50px;
            font-size: ${Math.random() * 20 + 15}px;
            pointer-events: none;
            z-index: 9999;
            animation: sakuraFloat ${Math.random() * 3 + 4}s linear forwards;
            opacity: 0.8;
        `;

        document.body.appendChild(petal);

        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 7000);
    }

    // Criar pétalas a cada 300ms
    petalInterval = setInterval(createPetal, 300);

    // Parar quando a página for recarregada (cleanup)
    window.addEventListener('beforeunload', () => {
        clearInterval(petalInterval);
    });
}

// Matrix Rain Effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()'.split('');
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(15, 15, 35, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#ff6b9d';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 100);
}

// Glitch Effect for Skills
function addGlitchEffect() {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const title = card.querySelector('h3');
            const originalText = title.textContent;

            // Glitch animation
            let glitchCount = 0;
            const glitchInterval = setInterval(() => {
                if (glitchCount < 5) {
                    title.textContent = originalText.split('').map(char =>
                        Math.random() > 0.8 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char
                    ).join('');
                    glitchCount++;
                } else {
                    title.textContent = originalText;
                    clearInterval(glitchInterval);
                }
            }, 50);
        });
    });
}

// Konami Code Easter Egg
function initKonamiCode() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    let sakuraExtremoAtivo = false;

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated!
                if (!sakuraExtremoAtivo) {
                    document.body.style.filter = 'hue-rotate(180deg) saturate(1.5) brightness(1.1)';
                    document.body.style.animation = 'pulse 2s infinite alternate';
                    alert('🌸 Modo Sakura Extremo Ativado! 🌸\n\nO modo permanecerá ativo até você recarregar a página!');
                    sakuraExtremoAtivo = true;

                    // Adiciona efeitos extras no modo extremo
                    document.body.classList.add('sakura-extremo');
                    createContinuousSakuraPetals();
                } else {
                    alert('🌸 Modo Sakura Extremo já está ativo! 🌸\n\nRecarregue a página para voltar ao normal.');
                }
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    createTerminalEffect();
    createSakuraPetals();
    createMatrixRain();
    addGlitchEffect();
    addPhotoEffects();
    initKonamiCode();

    // Add CSS keyframes for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        @keyframes sakuraFloat {
            0% {
                transform: translateY(-50px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes sakuraBurst {
            0% {
                transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) rotate(var(--angle)) translateX(150px) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes sparkle {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
        
        .sakura-petal {
            animation: sakuraFloat 20s linear infinite !important;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .notification-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    `;
    document.head.appendChild(style);

    // Continuous sakura generation
    setInterval(createSakuraPetals, 20000);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Por favor, preencha todos os campos.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Por favor, insira um email válido.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        // EmailJS integration
        // Check if EmailJS is loaded
        if (typeof emailjs === 'undefined') {
            console.error('❌ EmailJS não foi carregado! Verifique a internet.');
            showNotification('❌ Erro: Serviço de email não disponível. Verifique sua conexão.', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }

        // Initialize EmailJS
        console.log('🔧 Inicializando EmailJS...');

        try {
            emailjs.init("z5br6UWIco45I3dGF");
            console.log('✅ EmailJS inicializado com sucesso');
        } catch (initError) {
            console.error('❌ Erro ao inicializar EmailJS:', initError);
            showNotification('❌ Erro de configuração do serviço de email.', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }

        console.log('📧 Enviando email com dados:', {
            service: 'service_j65yx6b',
            template: 'template_1kfmkrf',
            from_name: name,
            from_email: email,
            message: message.substring(0, 50) + '...'
        });

        emailjs.send("service_j65yx6b", "template_1kfmkrf", {
            from_name: name,
            from_email: email,
            message: message,
            to_email: "moiseisfelipi@gmail.com"
        }).then(
            function (response) {
                console.log('✅ EMAIL ENVIADO COM SUCESSO!', response.status, response.text);
                showNotification('✨ Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                contactForm.reset();
                createSakuraBurst(submitBtn);
            },
            function (error) {
                console.error('❌ ERRO DETALHADO:', error);
                console.error('Tipo do erro:', error.text || error.message || error);

                let errorMessage = '❌ Erro ao enviar mensagem. ';

                // Detectar tipos de erro comuns
                if (error.text && error.text.includes('template')) {
                    errorMessage += 'Problema com o template do email.';
                } else if (error.text && error.text.includes('service')) {
                    errorMessage += 'Problema com o serviço de email.';
                } else if (error.text && error.text.includes('user')) {
                    errorMessage += 'Problema com as chaves de API.';
                } else {
                    errorMessage += 'Tente novamente ou entre em contato diretamente.';
                }

                showNotification(errorMessage, 'error');
            }
        ).finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });

        // Formspree integration (uncomment and configure to use)
        /*
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                showNotification('✨ Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                this.reset();
                createSakuraBurst(submitBtn);
            } else {
                throw new Error('Erro no envio');
            }
        })
        .catch(error => {
            showNotification('❌ Erro ao enviar mensagem. Tente novamente.', 'error');
            console.error('Error:', error);
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
        */

        // Netlify Forms integration (uncomment if hosting on Netlify)
        /*
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            showNotification('✨ Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            this.reset();
            createSakuraBurst(submitBtn);
        })
        .catch((error) => {
            showNotification('❌ Erro ao enviar mensagem. Tente novamente.', 'error');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
        */

        // TEMPORARY: Comentado - usando EmailJS agora
        /*
        setTimeout(() => {
            showNotification('📧 Formulário simulado! Configure um serviço de email para envio real.', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            createSakuraBurst(submitBtn);
        }, 2000);
        */
    });
}

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(45deg, var(--neon-green), var(--primary-color))' : 'linear-gradient(45deg, var(--accent-color), #ff4757)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        max-width: 400px;
        word-wrap: break-word;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.5s ease-in';
            setTimeout(() => notification.remove(), 500);
        }
    }, 5000);

    // Manual close
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.5s ease-in';
        setTimeout(() => notification.remove(), 500);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .contact-item');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing animation for hero title
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

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add LinkedIn profile link functionality
function openLinkedIn() {
    window.open('https://www.linkedin.com/in/mois%C3%A9s-filipe-568412297/', '_blank');
}

// Add click tracking for LinkedIn links
document.addEventListener('DOMContentLoaded', () => {
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');

    linkedinLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Track LinkedIn click (you can integrate with analytics here)
            console.log('LinkedIn profile accessed');

            // Optional: Add a small delay to ensure tracking
            setTimeout(() => {
                if (!e.defaultPrevented) {
                    window.open(link.href, '_blank');
                }
            }, 100);
        });
    });
});

// Skills animation counter (optional enhancement)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}

// Theme toggle functionality (optional feature)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// Enhanced mobile menu animation
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const bars = hamburger.querySelectorAll('.bar');

            bars.forEach((bar, index) => {
                if (hamburger.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
    }
});

// Photo Interaction Effects
function addPhotoEffects() {
    const imageContainer = document.querySelector('.image-container');
    const profileImage = document.querySelector('.profile-image');

    if (imageContainer && profileImage) {
        // Sakura burst effect on click
        imageContainer.addEventListener('click', () => {
            createSakuraBurst(imageContainer);
        });

        // Glitch effect on hover
        imageContainer.addEventListener('mouseenter', () => {
            profileImage.style.filter = 'brightness(1.2) contrast(1.2) saturate(1.3) hue-rotate(10deg)';

            // Create sparkle effect
            createSparkles(imageContainer);
        });

        imageContainer.addEventListener('mouseleave', () => {
            profileImage.style.filter = 'brightness(1.1) contrast(1.1)';
        });
    }
}

// Create sakura burst effect
function createSakuraBurst(container) {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 12; i++) {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 1000;
            animation: sakuraBurst 2s ease-out forwards;
            transform-origin: center;
        `;

        const angle = (360 / 12) * i;
        petal.style.setProperty('--angle', `${angle}deg`);

        document.body.appendChild(petal);

        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 2000);
    }
}

// Create sparkle effect
function createSparkles(container) {
    const rect = container.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: fixed;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                font-size: ${Math.random() * 15 + 10}px;
                pointer-events: none;
                z-index: 1000;
                animation: sparkle 1s ease-out forwards;
            `;

            document.body.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        }, i * 100);
    }
}

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }

    // Trigger initial animations
    document.body.classList.add('loaded');
});
