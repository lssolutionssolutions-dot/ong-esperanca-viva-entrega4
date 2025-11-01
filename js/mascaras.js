// Função genérica para aplicar máscara
function aplicarMascara(input, mascara) {
  input.addEventListener('input', function() {
    let valor = input.value.replace(/\D/g, ''); // remove tudo que não for número
    let resultado = '';
    let j = 0;

    for (let i = 0; i < mascara.length && j < valor.length; i++) {
      if (mascara[i] === '#') {
        resultado += valor[j++];
      } else {
        resultado += mascara[i];
      }
    }

    input.value = resultado;
  });
}

// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  const cpf = document.getElementById('cpf');
  const cep = document.getElementById('cep');
  const telefone = document.getElementById('telefone');

  if (cpf) aplicarMascara(cpf, '###.###.###-##');
  if (cep) aplicarMascara(cep, '#####-###');
  if (telefone) aplicarMascara(telefone, '(##) #####-####');
});
