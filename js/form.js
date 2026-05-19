
// classe contato

class contato {
    constructor (nome,sobrenome,email,cpf,telefone,contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

let isValid = true;

function Post(form) {
    isValid = true;
    const inputs = form.querySelectorAll('.fordform');
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            alert(`O campo ${input.placeholder} não pode conter apenas espaços!`);
            isValid = false;
            input.focus();
        }
    });
    if (!isValid) return;

  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value, 
    form.elements.namedItem("email").value, 
    form.elements.namedItem("cpf").value, 
    form.elements.namedItem("telefone").value, 
    form.elements.namedItem("contato").value
);
Enviar();
}

function Enviar() {

    var nome = document.getElementById("nome");

    if (isValid == true) {
        alert('Obrigado sr(a) ' + nome.value  + ' os seus dados foram encaminhados com sucesso');
     }

}