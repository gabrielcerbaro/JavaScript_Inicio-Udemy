// Define uma classe para representar um carrinho de compras.
class Carrinho {
    // O construtor inicializa o carrinho com itens, quantidade total e valor total.
    constructor(itens, qtdTotal, valorTotal) {
        this.itens = itens; // array com os itens do carrinho
        this.qtdTotal = qtdTotal; // soma de todas as quantidades
        this.valorTotal = valorTotal; // soma de todos os preços multiplicados pelas quantidades
    }

    // Método para adicionar um item ao carrinho.
    addItem(item) {
        let contador = 0; // variável para saber se o item já existe no carrinho

        // Percorre os itens atuais do carrinho usando for..in.
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                // Se o item já existe, aumenta a quantidade existente.
                this.itens[itemCarrinho].qtdTotal += item.qtdTotal;
                contador = 1; // marca que o item já estava presente
            }
        }

        // Se o item não estava no carrinho, adiciona um novo objeto ao array.
        if(contador == 0) {
            this.itens.push(item);
        }

        // Atualiza os totais do carrinho.
        this.qtdTotal += item.qtdTotal;
        this.valorTotal += item.preco * item.qtdTotal;
    }

    // Método para remover uma quantidade de item do carrinho.
    removeItem(item) {
        for(let i = 0; i < this.itens.length; i++){
            if(this.itens[i].id == item.id) {
                // Diminui a quantidade do item específico.
                this.itens[i].qtdTotal -= item.qtdTotal;
                this.qtdTotal -= item.qtdTotal;
                this.valorTotal -= item.preco * item.qtdTotal;
            }

            // Se a quantidade chegar a zero ou menos, remove o item do array.
            if(this.itens[i].qtdTotal <= 0) {
                this.itens.splice(i, 1);
                break; // sai do loop porque o item foi removido
            }
        }
    }
}

// Cria um carrinho com três itens iniciais e os totais já calculados.
let carrinho = new Carrinho([
    {
        id: 1,
        item: "Camisa",
        qtdTotal: 3,
        preco: 30
    },
    {
        id: 2,
        item: "Calça",
        qtdTotal: 1,
        preco: 80
    },
    {
        id: 3,
        item: "Tênis",
        qtdTotal: 1,
        preco: 120
    }
], 5, 350);

// Mostra o estado inicial do carrinho.
console.log(carrinho);

// Adiciona mais duas unidades do item com id 1 (Camisa).
carrinho.addItem({id: 1, nome:"Camisa", qtdTotal: 2, preco: 30});

// Mostra o carrinho depois de adicionar o item existente.
console.log(carrinho);

// Adiciona um novo item com id 4 (Regata).
carrinho.addItem({id: 4, nome:"Regata", qtdTotal: 1, preco: 20});

// Mostra o carrinho depois de adicionar o novo item.
console.log(carrinho);

// Remove uma unidade do item com id 1.
carrinho.removeItem({id: 1, nome:"Camisa", qtdTotal: 1, preco: 30});

// Mostra o carrinho após a remoção.
console.log(carrinho);