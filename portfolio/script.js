// script.js - Shadow Monarch Functionality

// Typing Animation
const typingText = document.getElementById('typing-text');
const phrases = [
    'Shadow Monarch',
    'Web Developer',
    'S-Rank Hunter',
    'Full Stack Architect',
    'Commander of Shadows'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing animation
typeEffect();

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
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

// Skills Data
const skills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'TypeScript',
    'Shadow Extraction', 'Dagger Mastery', 'Army Command',
    'Mana Sensing', 'Stealth', 'Night Vision', 'Regeneration',
    'MongoDB', 'Express', 'Vue.js', 'Angular', 'Django',
    'Shadow Summoning', 'Monarch\'s Domain', 'Ruler\'s Hand'
];

// Skills Orb Display
const skillsContainer = document.getElementById('skillsContainer');
const skillSearch = document.getElementById('skillSearch');

function displaySkills(filter = '') {
    const filteredSkills = skills.filter(skill => 
        skill.toLowerCase().includes(filter.toLowerCase())
    );
    
    skillsContainer.innerHTML = filteredSkills.map(skill => 
        `<div class="skill-item">${skill}</div>`
    ).join('');
}

displaySkills();

skillSearch.addEventListener('input', (e) => {
    displaySkills(e.target.value);
});

// Projects Data
const projects = [
    {
        title: 'Shadow Army Dashboard',
        category: 'web',
        description: 'Control your shadow soldiers in real-time',
        image: 'https://via.placeholder.com/300x200/2a1b3d/9d4edd?text=Shadow+Dashboard'
    },
    {
        title: 'Monarch\'s Mobile App',
        category: 'mobile',
        description: 'Track your hunter stats on the go',
        image: 'https://via.placeholder.com/300x200/2a1b3d/9d4edd?text=Monarch+App'
    },
    {
        title: 'Dungeon Raid System',
        category: 'web',
        description: 'Coordinate raids with your guild',
        image: 'https://via.placeholder.com/300x200/2a1b3d/9d4edd?text=Dungeon+System'
    },
    {
        title: 'Shadow Extraction Tool',
        category: 'shadow',
        description: 'Extract shadows from defeated enemies',
        image: 'https://via.placeholder.com/300x200/2a1b3d/9d4edd?text=Extraction'
    },
    {
        title: 'Hunter Ranking App',
        category: 'mobile',
        description: 'Compare hunter rankings worldwide',
        image: 'https://via.placeholder.com/300x200/2a1b3d/9d4edd?text=Ranking+App'
    },
    {
        title: 'Army Commander Interface',
        category: 'shadow',
        description: 'Command your shadow army efficiently',
        image: 'https://via.placeholder.com/300x200/2a1b3d/9d4edd?text=Army+Command'
    }
];

const projectsContainer = document.getElementById('projectsContainer');
const filterBtns = document.querySelectorAll('.filter-btn');

function displayProjects(category = 'all') {
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    projectsContainer.innerHTML = filteredProjects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        </div>
    `).join('');
}

displayProjects();

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayProjects(btn.dataset.filter);
    });
});

// WhatsApp Form Integration
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Message from Shadow Monarch Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    
    // Replace with your WhatsApp number (include country code without +)
    const phoneNumber = '1234567890'; // Replace with actual number
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    
    // Clear form
    contactForm.reset();
    
    // Show success message
    alert('Message sent to WhatsApp! The Shadow Monarch will respond soon.');
});

// Smooth scrolling for anchor links
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

// Parallax effect for shadow particles
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelector('.shadow-particles');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

// Certificate image click (lightbox effect)
const certCards = document.querySelectorAll('.cert-card');

certCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const title = card.querySelector('.cert-overlay h3').textContent;
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${title}">
                <h3>${title}</h3>
                <button class="close-lightbox">&times;</button>
            </div>
        `;
        
        // Add lightbox styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            backdrop-filter: blur(10px);
        `;
        
        const lightboxContent = lightbox.querySelector('.lightbox-content');
        lightboxContent.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            text-align: center;
        `;
        
        lightboxContent.querySelector('img').style.cssText = `
            max-width: 100%;
            max-height: 70vh;
            border: 3px solid #9d4edd;
            border-radius: 10px;
            box-shadow: 0 0 50px rgba(157, 78, 221, 0.5);
        `;
        
        lightboxContent.querySelector('h3').style.cssText = `
            color: #9d4edd;
            margin-top: 1rem;
            text-shadow: 0 0 10px #9d4edd;
        `;
        
        const closeBtn = lightbox.querySelector('.close-lightbox');
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 3rem;
            color: #fff;
            background: none;
            border: none;
            cursor: pointer;
            text-shadow: 0 0 10px #9d4edd;
        `;
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });
        
        document.body.appendChild(lightbox);
    });
});

// Add scroll reveal animation
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

document.querySelectorAll('.section > *:not(.section-title)').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s, transform 0.8s';
    observer.observe(element);
});

// Initialize floating effect for profile
const profile = document.querySelector('.profile-crystal');
if (profile) {
    profile.addEventListener('mousemove', (e) => {
        const rect = profile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        profile.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    profile.addEventListener('mouseleave', () => {
        profile.style.transform = 'rotateX(0) rotateY(0)';
    });
}