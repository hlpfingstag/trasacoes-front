window.addEventListener('load', () => {
    axios.get('https://gd-aula-heroku.herokuapp.com/users')
        .then((resposta) => {
            const dados = resposta.data.data;
            /// percorrer os dados.... desenhando na tela
            var conteudo = "";
            for (var usuario of dados) {
                conteudo += `
                    <tr>
                        <td><a href='#' onclick='navegar("${usuario.id}");'>${usuario.id}</a></td>
                        <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.cpf}</td>
                        <td>${usuario.age}</td>
                    </tr>
                `
            }

            const tabela = document.getElementById("dados");
            tabela.innerHTML = conteudo;
        });
});

function navegar(id) {
    localStorage.setItem("id", id);

    location.href = "detalhe.html";
}

function navegar_incluir() {
    location.href = "inclusao.html";
}