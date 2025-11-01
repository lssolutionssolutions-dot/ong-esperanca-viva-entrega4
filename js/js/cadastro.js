// === CADASTRO LOCAL COMPLETO ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const msg = document.getElementById("msg");

  // Carrega cadastros já existentes
  let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

  // Evento de envio do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const novoCadastro = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      cpf: form.cpf.value.trim(),
      telefone: form.telefone.value.trim(),
      nascimento: form.nascimento.value,
      endereco: form.endereco.value.trim(),
      cep: form.cep.value.trim(),
      cidade: form.cidade.value.trim(),
      estado: form.estado.value,
      tipo: form.tipo.value,
      mensagem: form.mensagem.value.trim(),
      dataEnvio: new Date().toLocaleString("pt-BR"),
    };

    // Salva no localStorage
    cadastros.push(novoCadastro);
    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    msg.textContent = "✅ Cadastro salvo com sucesso!";
    msg.style.color = "green";

    form.reset(); // limpa o formulário
  });
});
