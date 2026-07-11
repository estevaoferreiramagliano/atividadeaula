// vou pegar o formulário
const formulario = document.getElementById("formCadastro");

// quando clicar em enviar
formulario.addEventListener("submit", function(event){

    // impede o recarregamento da página
    event.preventDefault();

    // vou pegar os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const area = document.getElementById("area").value;
    const mensagem = document.getElementById("mensagem").value;

    // emitir as informações no console
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Data de nascimento:", dataNascimento);
    console.log("Área de interesse:", area);
    console.log("Mensagem:", mensagem);

});