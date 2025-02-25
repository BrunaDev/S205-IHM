document.addEventListener("mousemove", (e) => {
    // Verifica se o mouse está dentro da área do container
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();

    if (e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom) {
        return; // Não cria partículas se o mouse estiver dentro do container
    }

    // Cria a partícula
    let particle = document.createElement("div");
    particle.classList.add("particle");

    let x = e.clientX;
    let y = e.clientY;

    // Limita a criação das partículas para o fundo da página
    if (x < window.innerWidth && y < window.innerHeight) {
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
    }

    // Adiciona a partícula à camada de partículas
    document.querySelector('.particles-container').appendChild(particle);

    // Remove a partícula após a animação
    setTimeout(() => {
        particle.remove();
    }, 1000);
});