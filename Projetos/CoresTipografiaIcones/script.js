// Seleção de elementos
const themeToggle = document.getElementById('theme-toggle');
const themeMenu = document.getElementById('theme-menu');
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

// Função para mudar o tema
function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeMenu.classList.remove('active');
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

// Carregar tema salvo no localStorage ao iniciar
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
};