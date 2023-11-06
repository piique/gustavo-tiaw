
// Devine o limite de upload de imagem para no maximo 2MB (para não estourar local storage)
document.getElementById('imagem-perfil').addEventListener('change', function() {
    var fileSize = this.files[0].size / 1024 / 1024;
    var limit = 2;
    if (fileSize > limit) {
        document.getElementById('file-size-warning').style.display = 'block';
        this.value = '';
    } else {
        document.getElementById('file-size-warning').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecione o formulário pelo seu ID e adicione um ouvinte de evento `submit`
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        // Previna o comportamento padrão do formulário, que é recarregar a página
        event.preventDefault();
        salvarCadastro();
    });

    // // Carrega os dados de cadastro quando a página é carregada
    // carregarCadastro();
});

function salvarCadastro() {
    var fileInput = document.getElementById('imagem-perfil');
    var file = fileInput.files[0];

    var reader = new FileReader();
    reader.onload = function(e) {
        var cadastro = {
            nome: document.getElementById('nome').value,
            nome: document.getElementById('nome').value,
            linkTeams: document.getElementById('link-teams').value,
            email: document.getElementById('email').value,
            linkDiscord: document.getElementById('link-discord').value,
            senha: document.getElementById('senha').value,
            linkSkype: document.getElementById('link-skype').value,
            idioma: document.getElementById('idioma').value,
            telefone: document.getElementById('telefone').value,
            descricaoPessoal: document.getElementById('descricao-pessoal').value,
            linkMeet: document.getElementById('link-meet').value,
            descricaoAula: document.getElementById('descricao-aula').value,
            imagemPerfil: e.target.result
        };

        // Salve os dados no localStorage, incluindo a imagem em base64
        localStorage.setItem('cadastro', JSON.stringify(cadastro));

        alert('Cadastro salvo com sucesso!\n JSON salvo no localStorage: \n' + JSON.stringify(cadastro));
    };
}
