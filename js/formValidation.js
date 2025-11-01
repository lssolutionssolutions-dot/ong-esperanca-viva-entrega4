// === VALIDAÇÃO E SALVAMENTO COMPLETO DO FORMULÁRIO ===
window.attachFormValidation = function attachFormValidation() {
  const form = document.getElementById("cadastroForm");
  if (!form) return; // Se não estiver na página, sai

  const msg = document.getElementById("msg");

  // Evita duplicar listeners
  if (form.dataset.bound === "1") return;
  form.dataset.bound = "1";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // === Captura TODOS os campos ===
    const nome = form.querySelector("#nome").value.trim();
    const email = form.querySelector("#email").value.trim();
    const cpf = form.querySelector("#cpf").value.trim();
    const telefone = form.querySelector("#telefone").value.trim();
    const nascimento = form.querySelector("#nascimento").value;
    const endereco = form.querySelector("#endereco").value.trim();
    const cep = form.querySelector("#cep").value.trim();
    const cidade = form.querySelector("#cidade").value.trim();
    const estado = form.querySelector("#estado").value;
    const tipo = form.querySelector("input[name='tipo']:checked")?.value || "";
    const mensagem = form.querySelector("#mensagem").value.trim();

    // === Validação ===
    if (!nome || !email || !cpf || !telefone || !tipo) {
      msg.textContent = "⚠️ Preencha todos os campos obrigatórios!";
      msg.className = "error";
      return;
    }

    // === Cria objeto com todos os dados ===
    const novoCadastro = {
      nome,
      email,
      cpf,
      telefone,
      nascimento,
      endereco,
      cep,
      cidade,
      estado,
      tipo,
      mensagem,
      dataEnvio: new Date().toLocaleString("pt-BR")
    };

    // === Salva no localStorage ===
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
    cadastros.push(novoCadastro);
    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    // === Mensagem de sucesso ===
    msg.textContent = "✅ Cadastro realizado com sucesso!";
    msg.className = "success";

    // === Limpa os campos depois de 2 segundos ===
    setTimeout(() => {
      form.reset();
      msg.textContent = "";
    }, 2000);
  });
};

// === Executa quando a página é carregada ===
document.addEventListener("DOMContentLoaded", () => window.attachFormValidation());
// === CORRIGE FORMATAÇÃO DOS CAMPOS CPF, TELEFONE E CEP ===
document.addEventListener("DOMContentLoaded", () => {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  if (cpf) {
    cpf.addEventListener("input", () => {
      let v = cpf.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      cpf.value = v
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    });
  }

  if (telefone) {
    telefone.addEventListener("input", () => {
      let v = telefone.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      telefone.value = v
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d{4})$/, "$1-$2");
    });
  }

  if (cep) {
    cep.addEventListener("input", () => {
      let v = cep.value.replace(/\D/g, "");
      if (v.length > 8) v = v.slice(0, 8);
      cep.value = v.replace(/(\d{5})(\d{3})$/, "$1-$2");
    });
  }
});
