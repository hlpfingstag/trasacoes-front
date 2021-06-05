window.addEventListener('load', () => {
    const id = localStorage.getItem("id");

    axios.get(`https://gd-aula-heroku.herokuapp.com/users/${id}`)
        .then((resposta) => {
            const { name, email, cpf, age } = resposta.data.data;

            document.getElementById("name").value = name;
            document.getElementById("cpf2").innerText = cpf;
            document.getElementById("cpf").value = cpf;
            document.getElementById("email").value = email;
            document.getElementById("age").value = age;
        }
        );
});

function atualizar() {
    const id = localStorage.getItem("id");
    const nome = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("age").value;

    axios.put(`https://gd-aula-heroku.herokuapp.com/users/${id}`, {
        name: nome,
        cpf,
        email,
        age: idade,
    }).then((resposta) => {
        if (resposta.data.success) {
            alert("Registro alterado");
            location.href = "index.html";
        } else {
            alert(resposta.data.message);
        }
    }).catch((erro) => {
        alert(erro.response.data.msg);
    });
}

function excluir() {
    const id = localStorage.getItem("id");

    axios.delete(`https://gd-aula-heroku.herokuapp.com/users/${id}`)
        .then((resposta) => {
            if (resposta.data.success) {
                alert("Registro Excluído");
                location.href = "index.html";
            } else {
                alert(resposta.data.message);
            }
        }).catch((erro) => {
            alert(erro.response.data.msg);
        });
}