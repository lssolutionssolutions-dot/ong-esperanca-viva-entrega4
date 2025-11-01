// === SPA BÁSICO ===
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const conteudo = document.querySelector("main");

  async function carregarConteudo(pagina) {
    const resposta = await fetch(pagina);
    const html = await resposta.text();
    conteudo.innerHTML = html;

    // ⚠️ IMPORTANTE: reanexar comportamentos da página carregada (SPA)
    if (typeof window.attachFormValidation === "function") {
    window.attachFormValidation();
  }  

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const destino = e.target.getAttribute("href");
      carregarConteudo(destino);
      history.pushState(null, null, destino);
    });
  });

  window.addEventListener("popstate", () => {
    carregarConteudo(location.pathname.replace("/", ""));
  });
});

