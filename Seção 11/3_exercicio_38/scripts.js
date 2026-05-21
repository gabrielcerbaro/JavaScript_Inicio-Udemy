class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    novoEndCompleto(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(rua) {
        this.rua = rua;
    }
    set novoBairro(bairro) {
        this.bairro = bairro;
    }
    set novaCidade(cidade) {
        this.cidade = cidade;
    }
    set novoEstado(estado) {
        this.estado = estado;
    }
}

let clientes = new Endereco ("ALBERTO", "ADAM", "ADAMANTINA", "AMAZONAS");

clientes.novaRua = "Rua mayara";

clientes.novoEndCompleto("Rua dos cascais", "Bairro feliz", "São miguel do oeste", "SC");

console.log(clientes);
