// Obtém o elemento do formulário
const formulario = document.getElementById('orcamento-salario');

// Função para ser executada quando o formulário for submetido
function formularioSubmetido(event) {
  event.preventDefault(); // Impede que o formulário seja enviado normalmente (recarregando a página)

  const salario = parseFloat(document.getElementById('salario').value);
const reserva_emergencia = (salario * 0.20).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const investimentos = (salario * 0.30).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const compras_futuras = (salario * 0.20).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const entreterimento = (salario * 0.20).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const gastos_extras = (salario * 0.10).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });


  document.getElementById('reserva_emergencia').textContent = reserva_emergencia
  document.getElementById('investimentos').textContent = investimentos
  document.getElementById('compras_futuras').textContent = compras_futuras
  document.getElementById('entreterimento').textContent = entreterimento
  document.getElementById('gastos_extras').textContent = gastos_extras
}

// Adiciona o event listener para o evento de submissão (submit) do formulário
formulario.addEventListener('submit', formularioSubmetido);
