// main.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Site da ONG Esperança Viva carregado com sucesso!");

  // === INTERAÇÃO ADICIONAL: BOTÃO VOLTAR AO TOPO ===
  const btnTopo = document.getElementById("btnTopo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
// === Acessibilidade: modo alto contraste ===
const btnContraste = document.getElementById("btnContraste");

if (btnContraste) {
  btnContraste.addEventListener("click", () => {
    document.body.classList.toggle("modo-alto-contraste");

    // Salvar preferência do usuário no navegador
    const contrasteAtivo = document.body.classList.contains("modo-alto-contraste");
    localStorage.setItem("contrasteAtivo", contrasteAtivo);
  });

  // Recuperar preferência salva ao carregar o site
  const contrasteSalvo = localStorage.getItem("contrasteAtivo") === "true";
  if (contrasteSalvo) {
    document.body.classList.add("modo-alto-contraste");
  }
}

