const salarioInput = document.getElementById('salario');
const reservaEmergenciaOutput = document.getElementById('reserva_emergencia');
const investimentosOutput = document.getElementById('investimentos');
const comprasFuturasOutput = document.getElementById('compras_futuras');
const entreterimentoOutput = document.getElementById('entreterimento');
const gastosExtrasOutput = document.getElementById('gastos_extras');

if (localStorage.getItem("salario")) {
  salarioInput.value = localStorage.getItem("salario");
  reservaEmergenciaOutput.textContent = localStorage.getItem("reserva_emergencia");
  investimentosOutput.textContent = localStorage.getItem("investimentos");
  comprasFuturasOutput.textContent = localStorage.getItem("compras_futuras");
  entreterimentoOutput.textContent = localStorage.getItem("entreterimento");
  gastosExtrasOutput.textContent = localStorage.getItem("gastos_extras");
}

const formulario = document.getElementById('orcamento-salario');

function formularioSubmetido(event) {
  event.preventDefault();

  const salario = parseFloat(salarioInput.value);
  const reservaEmergencia = (salario * 0.20).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const investimentos = (salario * 0.30).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const comprasFuturas = (salario * 0.20).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const entreterimento = (salario * 0.20).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const gastosExtras = (salario * 0.10).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  localStorage.setItem("salario", salario);
  localStorage.setItem("reserva_emergencia", reservaEmergencia);
  localStorage.setItem("investimentos", investimentos);
  localStorage.setItem("compras_futuras", comprasFuturas);
  localStorage.setItem("entreterimento", entreterimento);
  localStorage.setItem("gastos_extras", gastosExtras);

  reservaEmergenciaOutput.textContent = reservaEmergencia;
  investimentosOutput.textContent = investimentos;
  comprasFuturasOutput.textContent = comprasFuturas;
  entreterimentoOutput.textContent = entreterimento;
  gastosExtrasOutput.textContent = gastosExtras;
}

formulario.addEventListener('submit', formularioSubmetido);