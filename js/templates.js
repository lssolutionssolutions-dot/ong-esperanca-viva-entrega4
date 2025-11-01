// === SISTEMA DE TEMPLATES JS ===
const Templates = {
  inicio: `
    <section class="section">
      <h2>Bem-vindo à ONG Esperança Viva</h2>
      <p>Juntos transformamos vidas e construímos esperança.</p>
    </section>
  `,
  projetos: `
    <section class="section">
      <h2>Nossos Projetos</h2>
      <p>Conheça as ações sociais realizadas pela nossa ONG.</p>
    </section>
  `,
  cadastro: `
    <section class="section">
      <h2>Cadastre-se</h2>
      <form id="cadastroForm">
        <label>Nome:</label>
        <input type="text" required>
        <button type="submit">Enviar</button>
      </form>
    </section>
  `
};

// Exemplo de uso: inserir template dinamicamente no main
function carregarTemplate(nome) {
  const main = document.querySelector("main");
  main.innerHTML = Templates[nome] || "<p>Conteúdo não encontrado.</p>";
}

