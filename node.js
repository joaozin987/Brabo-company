const meuBotao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

meuBotao.addEventListener("click", function () {
  mensagem.style.display = "block";
  mensagem.innerHTML = "Olá voce clicou no botao.";
});
