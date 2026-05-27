// Define uma classe Endereco para armazenar informações de localização.
class Endereco {
    // O construtor inicializa as propriedades do objeto com valores fornecidos.
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    // Método para atualizar todos os campos do endereço de uma só vez.
    novoEndCompleto(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    // Setter para alterar a rua usando a sintaxe de atribuição.
    set novaRua(rua) {
        this.rua = rua;
    }

    // Setter para alterar o bairro.
    set novoBairro(bairro) {
        this.bairro = bairro;
    }

    // Setter para alterar a cidade.
    set novaCidade(cidade) {
        this.cidade = cidade;
    }

    // Setter para alterar o estado.
    set novoEstado(estado) {
        this.estado = estado;
    }
}

// Cria um novo objeto clientes com valores iniciais para endereço.
let clientes = new Endereco("ALBERTO", "ADAM", "ADAMANTINA", "AMAZONAS");

// Usa o setter novaRua para mudar somente a rua do endereço.
clientes.novaRua = "Rua mayara";

// Usa o método para atualizar todo o endereço de uma vez.
clientes.novoEndCompleto("Rua dos cascais", "Bairro feliz", "São miguel do oeste", "SC");

// Exibe o objeto clientes no console.
console.log(clientes);
