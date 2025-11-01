// === SIMULAÇÃO SPA BÁSICA ===
// Faz com que as páginas (Início, Projetos, Cadastro) mudem sem recarregar
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const conteudo = document.querySelector("main") || document.body;

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pagina = link.getAttribute("href");
      carregarPagina(pagina);
    });
  });

  async function carregarPagina(pagina) {
    try {
      const resposta = await fetch(pagina);
      const texto = await resposta.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(texto, "text/html");
      const novoConteudo = doc.querySelector("main") || doc.body;
      conteudo.innerHTML = novoConteudo.innerHTML;
      window.scrollTo(0, 0);
    } catch (erro) {
      conteudo.innerHTML = "<p>Erro ao carregar página.</p>";
    }
  }
});

// === VALIDAÇÃO DE FORMULÁRIO ===
document.addEventListener("submit", e => {
  if (e.target.matches("form")) {
    e.preventDefault();

    const campos = e.target.querySelectorAll("input, textarea, select");
    let valido = true;

    campos.forEach(campo => {
      if (!campo.value.trim()) {
        valido = false;
        campo.style.border = "2px solid red";
      } else {
        campo.style.border = "";
      }
    });

    if (!valido) {
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      alert("Formulário enviado com sucesso!");
      e.target.reset();
    }
  }
});
