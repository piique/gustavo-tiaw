function preencherDadosCadastro() {
    var dadosSalvos = localStorage.getItem('cadastro');

    if (dadosSalvos) {
        dadosSalvos = JSON.parse(dadosSalvos);

        for (var chave in dadosSalvos) {
            if (dadosSalvos.hasOwnProperty(chave)) {
                var input = document.getElementById(chave);
                if (chave === 'imagemPerfil') {
                    var imgElement = document.getElementById('imagemDoPerfil');
                    imgElement.src = dadosSalvos[chave];
                } else if (input) {
                    input.value = dadosSalvos[chave];
                }
            }
        }
    } else {
        alert('Nenhum usuário cadastrado. Você será redirecionado para a página de cadastro.');
        window.location.href = '/cadastro.html';
    }
}

function carregarImagemDoPerfil() {
    var dadosCadastro = localStorage.getItem('cadastro');
    if (dadosCadastro) {
        dadosCadastro = JSON.parse(dadosCadastro);
        if (dadosCadastro.imagemPerfil) {
            var imgElement = document.getElementById('imagemDoPerfil');
            imgElement.src = dadosCadastro.imagemPerfil;
        } else {
            console.log('Não há imagem de perfil salva no cadastro.');
        }
    } else {
        alert('Não há dados de usuário salvos.');
        window.location.href = '/cadastro.html';
    }
}


document.addEventListener('DOMContentLoaded', preencherDadosCadastro);
document.addEventListener('DOMContentLoaded', carregarImagemDoPerfil);
