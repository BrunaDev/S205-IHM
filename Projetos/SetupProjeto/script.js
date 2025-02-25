// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, reserva: null, entrega: null },
  { id: 2, formato: "padrao", status: true, acessivel: false, reserva: null, entrega: null },
  { id: 3, formato: "padrao", status: true, acessivel: false, reserva: null, entrega: null },
  { id: 4, formato: "padrao", status: false, acessivel: true, reserva: null, entrega: null },
  { id: 5, formato: "padrao", status: false, acessivel: true, reserva: null, entrega: null },
  { id: 6, formato: "duplo", status: true, acessivel: true, reserva: null, entrega: null },
  { id: 7, formato: "duplo", status: false, acessivel: true, reserva: null, entrega: null },
  { id: 8, formato: "duplo", status: false, acessivel: true, reserva: null, entrega: null },  
];

// função para reservar o armário
function reservarArmario() {
  let tipoSelecionado = document.getElementById("tipoArmario").value;

  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);

  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
  // data e hora do momento da reserva
  let agora = new Date();

  //prazo de 24h para entrega das chaves
  let prazoEntrega = new Date(agora);
  prazoEntrega.setHours(agora.getHours() + 24);

  armarioSorteado.status = false;
  armarioSorteado.reserva = agora.toLocaleString("pt-BR");
  armarioSorteado.entrega = prazoEntrega.toLocaleString("pt-BR");

  usuario.pendencia = true;

  document.getElementById("resultado").innerHTML = `
    <p>Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso.</p>
    <p>Data da reserva: ${armarioSorteado.reserva}</p>
    <p>Prazo para entrega das chaves: ${armarioSorteado.entrega}</p>
  `;

  console.log(usuario);
  console.log(armarios);

}