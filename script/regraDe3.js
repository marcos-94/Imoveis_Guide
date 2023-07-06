function calcular() {
  let input1 = document.querySelector(".input1").value;
  let input2 = document.querySelector(".input2").value;
  let input3 = document.querySelector(".input3").value;
  let input4 = document.querySelector(".input4");

  let resultado = (Number(input3) * Number(input2)) / Number(input1);
  input4.value = resultado;
};
