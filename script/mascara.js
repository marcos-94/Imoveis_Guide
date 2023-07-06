const inputCPF = document.querySelector(".cpf");
const inputTelefone = document.querySelector(".telefone");
const btnMascara = document.querySelector(".btnMascara");

inputCPF.addEventListener("keypress", () => {
  const valorInputCPF = inputCPF.value.length;
  if (valorInputCPF == 3) {
    inputCPF.value += ".";
  } else if (valorInputCPF == 7) {
    inputCPF.value += ".";
  } else if (valorInputCPF == 11) {
    inputCPF.value += "-";
  }
});

inputTelefone.addEventListener("keypress", () => {
  const valorInputTelefone = inputTelefone.value.length;
  if (valorInputTelefone == 0) {
    inputTelefone.value += "(";
  } else if (valorInputTelefone == 3) {
    inputTelefone.value += ") ";
  } else if (valorInputTelefone == 9) {
    inputTelefone.value += "-";
  }
});

btnMascara.addEventListener("click",()=>{
  alert("Mensagem enviada");
});



