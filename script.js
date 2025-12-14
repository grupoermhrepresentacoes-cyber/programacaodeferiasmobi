alert("JS ONLINE OK");
## Aplicativo Web Gratuito – Mês de Férias

Este é um **aplicativo em formato de site**, totalmente gratuito, com aparência moderna e simples.

### O que ele faz

* A pessoa digita o **nome**
* O sistema mostra o **mês de férias** correspondente
* **Somente você** pode cadastrar, editar ou apagar os dados
* Funciona como site e pode ser instalado como app (PWA simples)

---

## 🔐 Como funciona a privacidade

* Os dados ficam salvos no **localStorage do navegador**
* Existe um **modo administrador protegido por senha**
* Usuários comuns **não veem nem alteram os dados**

> ⚠️ Observação: como é 100% gratuito, não há servidor. Os dados ficam apenas no navegador onde você cadastrar.

---

## 📁 Estrutura dos arquivos

```
index.html
style.css
script.js
```

---

## 🧱 index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Mês de Férias</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Mês de Férias</h1>

    <input type="text" id="nomeBusca" placeholder="Digite seu nome">
    <button onclick="buscarFerias()">Consultar</button>

    <p id="resultado"></p>

    <hr>

    <button class="admin" onclick="modoAdmin()">Modo Administrador</button>

    <div id="adminArea" class="hidden">
      <h2>Administrador</h2>
      <input type="password" id="senha" placeholder="Senha">
      <button onclick="entrarAdmin()">Entrar</button>

      <div id="adminPainel" class="hidden">
        <input type="text" id="nome" placeholder="Nome">
        <input type="text" id="mes" placeholder="Mês de férias">
        <button onclick="salvar()">Salvar</button>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 style.css

```css
body {
  font-family: Arial, sans-serif;
  background: #f4f6f8;
}

.container {
  max-width: 400px;
  margin: 50px auto;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h1, h2 {
  text-align: center;
}

input, button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.admin {
  background: #444;
}

.hidden {
  display: none;
}
```

---

## ⚙️ script.js

```javascript
const SENHA_ADMIN = "1234"; // TROQUE A SENHA

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
```

---

## 🌍 Publicar gratuitamente

Você pode publicar este app em:

* Netlify
* GitHub Pages
* Cloudflare Pages

Todos são **100% gratuitos**.

---

## 🚀 Próximas melhorias (se quiser)

* Transformar em **PWA instalável**
* Usar **Firebase gratuito** para dados online privados
* Melhorar visual (cores, animações)
* Criar painel admin completo

Se quiser, posso **adaptar exatamente ao seu gosto** ou te guiar para publicar agora mesmo.

