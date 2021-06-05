function incluir() {
    // Aqui a gente busca dos dados tela e coloca em variáveis
    const nome = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("age").value;

    if (!nome) {
        alert("O Nome de ser informado (front)");
        return;
    }

    if (nome.length < 3) {
        alert('O nome deve conter ao menos 3 caracteres (front)');
        return;
    }

    axios.post(`https://gd-aula-heroku.herokuapp.com/users`, {
        name: nome,
        cpf,
        email,
        age: idade,
    }).then((resposta) => {
        if (resposta.data.success) {
            alert("Registro incluído");
            location.href = "index.html";
        } else {
            alert(resposta.data.message);
        }
    }).catch((erro) => {
        alert(erro.response.data.msg);
    });
}