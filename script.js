alert("JS ONLINE OK");

const SENHA_ADMIN = "1234";

function buscarFerias() {
  const nome = document.getElementById("nomeBusca").value.toLowerCase();
  const dados = JSON.parse(localStorage.getItem("ferias")) || {};

  if (dados[nome]) {
    document.getElementById("resultado").innerText = `Suas férias são em ${dados[nome]}`;
  } else {
    document.getElementById("resultado").innerText = "Nome não encontrado";
  }
}

function modoAdmin() {
  document.getElementById("adminArea").classList.toggle("hidden");
}

function entrarAdmin() {
  const senha = document.getElementById("senha").value;
  if (senha === SENHA_ADMIN) {
    document.getElementById("adminPainel").classList.remove("hidden");
  } else {
    alert("Senha incorreta");
  }
}

function salvar() {
  const nome = document.getElementById("nome").value.toLowerCase();
  const mes = document.getElementById("mes").value;
  const dados = JSON.parse(localStorage.getItem("ferias")) || {};

  dados[nome] = mes;
  localStorage.setItem("ferias", JSON.stringify(dados));

  alert("Salvo com sucesso");
}

* Criar painel admin completo

Se quiser, posso **adaptar exatamente ao seu gosto** ou te guiar para publicar agora mesmo.


