// Seleção de elementos
const themeToggle = document.getElementById('theme-toggle');
const themeMenu = document.getElementById('theme-menu');
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselContainer = document.querySelector('.carousel-container');
let currentIndex = 0;
let autoSlideInterval;

// Função para mudar o tema
function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeMenu.classList.remove('active');
    createCards();
    updateCarousel();
}

// Toggle do menu de temas
themeToggle.addEventListener('click', () => {
    themeMenu.classList.toggle('active');
});

// Aplicar tema ao clicar nos botões
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        setTheme(theme);
    });
});

// Dados dos eventos
const eventos = [
    {
        id: 1,
        title: "Semana do Software 2025",
        date: "12/05",
        time: "10:00",
        location: "Salão de Eventos",
        type: "tech",
        description: "Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
        id: 2,
        title: "Workshop de IoT",
        date: "12/01",
        time: "08:00",
        location: "Laboratório CS&I",
        type: "tech",
        description: "Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
        id: 3,
        title: "Festa dos Alunos 2025",
        date: "18/05",
        time: "19:00",
        location: "Área Esportiva do Inatel",
        type: "cultural",
        description: "Venha comemorar a melhor Festa dos Alunos de todos os tempos!",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
        id: 4,
        title: "Feira de Oportunidades",
        date: "04/05",
        time: "10:00",
        location: "Salão de Eventos",
        type: "academic",
        description: "Venha conhecer empresas e projetos com destaque na área da engenharia.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400"
    }
];

// Função para criar os cards dinamicamente
function createCards() {
    carousel.innerHTML = '';
    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>
                    <span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time}
                    <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}
                </p>
            </div>
        `;
        carousel.appendChild(card);
    });
}

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const cardWidth = carousel.querySelector('.card')?.offsetWidth || 0;
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Função para avançar automaticamente para o próximo card
function autoSlide() {
    if (currentIndex < eventos.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta ao início quando chega ao último card
    }
    updateCarousel();
}

// Iniciar o carrossel automático
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000); // 5000ms = 5 segundos
}

// Parar o carrossel automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Evento para o botão "anterior"
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = eventos.length - 1; // Volta ao último card se estiver no primeiro
    }
    updateCarousel();
});

// Evento para o botão "próximo"
nextBtn.addEventListener('click', () => {
    if (currentIndex < eventos.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta ao primeiro card se estiver no último
    }
    updateCarousel();
});

// Pausar o carrossel quando o mouse estiver sobre ele
carouselContainer.addEventListener('mouseenter', () => {
    stopAutoSlide();
});

// Retomar o carrossel quando o mouse sair
carouselContainer.addEventListener('mouseleave', () => {
    startAutoSlide();
});

// Inicializar ao carregar a página
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    createCards();
    updateCarousel();
    startAutoSlide();
};