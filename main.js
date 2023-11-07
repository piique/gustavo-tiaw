
document.getElementById('imagemPerfil').addEventListener('change', function() {
    var fileSize = this.files[0].size / 1024 / 1024;
    var limit = 2;
    if (fileSize > limit) {
        document.getElementById('file-size-warning').style.display = 'block';
        this.value = '';
    } else {
        document.getElementById('file-size-warning').style.display = 'none';
    }
});

function salvarCadastro(e) {
    e.preventDefault();


    var form = document.querySelector('#cadastroForm');
    if (!form.checkValidity()) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    var fileInput = document.getElementById('imagemPerfil');
    var file = fileInput.files[0];


    if (file && fileInput.checkValidity()) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var cadastro = {
                nome: document.getElementById('nome').value,
                linkTeams: document.getElementById('linkTeams').value,
                email: document.getElementById('email').value,
                linkDiscord: document.getElementById('linkDiscord').value,
                senha: document.getElementById('senha').value,
                linkSkype: document.getElementById('linkSkype').value,
                idioma: document.getElementById('idioma').value,
                imagemPerfil: e.target.result,
                telefone: document.getElementById('telefone').value,
                descricaoPessoal: document.getElementById('descricaoPessoal').value,
                linkMeet: document.getElementById('linkMeet').value,
                descricaoAula: document.getElementById('descricaoAula').value
            };

        
            localStorage.setItem('cadastro', JSON.stringify(cadastro));

        
            alert('Cadastro salvo com sucesso!');
            window.location.href = '/editar-perfil';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecione uma imagem para o perfil.');
    }
}

document.getElementById('imagemPerfil').addEventListener('change', function(event) {
    var file = event.target.files[0];

   
    if (file && file.size <= 2 * 1024 * 1024) {
        document.getElementById('file-size-warning').style.display = 'none';

        var reader = new FileReader();
        reader.onload = function(e) {
            var base64Image = e.target.result;
           
            document.getElementById('imagemDoPerfil').src = base64Image;
        };
        reader.readAsDataURL(file);
    } else {
        document.getElementById('file-size-warning').style.display = 'block';
        this.value = '';
    }
});

document.querySelector('#cadastroForm').addEventListener('submit', salvarCadastro);

