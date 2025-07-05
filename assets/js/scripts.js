// Inicializar AOS
AOS.init({ 
  duration: 800, 
  once: true,
  offset: 120 
});

// Cuenta regresiva
const weddingDate = new Date("2025-12-20T15:00:00");
const countdownEl = document.getElementById("countdown-display");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  
  if (diff <= 0) {
    countdownEl.textContent = "¡Es hoy!";
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.textContent = days;
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60); // Actualizar cada hora

// Navegación flotante
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section, header');

function updateActiveNav() {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop - 200 && 
        window.pageYOffset < sectionTop + sectionHeight - 200) {
      currentSection = section.id;
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.section === currentSection) {
      item.classList.add('active');
    }
  });
}

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetSection = document.getElementById(item.dataset.section);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Formulario RSVP
const rsvpForm = document.getElementById('rsvp-form');
const attendanceSelect = document.getElementById('attendance');
const guestNumberContainer = document.getElementById('guest-number-container');

attendanceSelect.addEventListener('change', (e) => {
  if (e.target.value === 'yes') {
    guestNumberContainer.style.display = 'block';
  } else {
    guestNumberContainer.style.display = 'none';
  }
});

rsvpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por confirmar tu asistencia! Nos vemos el día de la boda.');
  rsvpForm.reset();
  guestNumberContainer.style.display = 'none';
});

// Mapa interactivo
const locationBtns = document.querySelectorAll('.location-btn');
const weddingMap = document.getElementById('wedding-map');

locationBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    locationBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if (btn.dataset.location === 'ceremony') {
      weddingMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.3717517170576!2d-99.1593577!3d18.870582199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce75d9bbce02e9%3A0x560b587bf4447d04!2sJard%C3%ADn%20Santa%20Barbara!5e0!3m2!1ses!2smx!4v1751682116771!5m2!1ses!2smx';
    } else {
      weddingMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.3717517170576!2d-99.1593577!3d18.870582199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce75d9bbce02e9%3A0x560b587bf4447d04!2sJard%C3%ADn%20Santa%20Barbara!5e0!3m2!1ses!2smx!4v1751682116771!5m2!1ses!2smx';
    }
  });
});

// Efecto de pétalos
function createPetals() {
  const container = document.getElementById('petals-container');
  const petalCount = 15;
  
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Tamaño aleatorio entre 10px y 20px
    const size = Math.random() * 10 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // Posición inicial aleatoria
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = `-20px`;
    
    // Duración de animación aleatoria entre 10s y 20s
    const duration = Math.random() * 10 + 10;
    petal.style.animationDuration = `${duration}s`;
    
    // Retraso aleatorio
    petal.style.animationDelay = `${Math.random() * 5}s`;
    
    // Variable CSS para la dirección de caída
    petal.style.setProperty('--random-x', Math.random() > 0.5 ? 1 : -1);
    
    container.appendChild(petal);
  }
}

// Solo crear pétalos en el header
//createPetals();

// Opcional: Lightbox para las imágenes
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    // Aquí puedes implementar un lightbox si lo deseas
    console.log('Mostrar imagen en grande:', this.src);
  });
});