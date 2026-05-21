class Carrinho {
    constructor(itens, qtdTotal, valorTotal) {
        this.itens = itens;
        this.qtdTotal = qtdTotal;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtdTotal += item.qtdTotal;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.qtdTotal += item.qtdTotal;
        this.valorTotal += item.preco * item.qtdTotal;
        
    }

    removeItem(item) {
        for(let i = 0; i < this.itens.length; i++){

            if(this.itens[i].id == item.id) {
                this.itens[i].qtdTotal -= item.qtdTotal;
                this.qtdTotal -= item.qtdTotal;
                this.valorTotal -= item.preco * item.qtdTotal;
            }

            if(this.itens[i].qtdTotal <= 0) {
                this.itens.splice(i, 1);
                break;
            }
            
            }
        }
    }

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

console.log(carrinho);

carrinho.addItem({id: 1, nome:"Camisa", qtdTotal: 2, preco: 30});

console.log(carrinho);

carrinho.addItem({id: 4, nome:"Regata", qtdTotal: 1, preco: 20});

console.log(carrinho);

carrinho.removeItem({id: 1, nome:"Camisa", qtdTotal: 1, preco: 30});

console.log(carrinho);