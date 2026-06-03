// O asterisco em "function*" indica que esta e uma funcao geradora, tambem chamada de generator.
// Uma generator nao executa tudo de uma vez; ela pode pausar e continuar de onde parou.
// Se fosse apenas "function criadorId()", nao poderiamos usar "yield" dentro dela.
function* criadorId () {
    // Criamos a variavel "id" com valor inicial 1.
    // Ela guarda o proximo numero que sera entregue pela generator.
    // Se comecasse em 0, o primeiro ID gerado seria 0 em vez de 1.
    let id = 1;
    
    // "while(true)" cria um loop infinito de proposito.
    // Neste caso ele nao trava o programa porque a generator pausa a cada "yield".
    // Se fosse um loop infinito comum sem "yield", o codigo ficaria preso nele.
    while(true) {
        // "yield" entrega o valor atual de "id" para quem chamou ".next()".
        // Depois de entregar, a generator pausa exatamente nesta linha.
        // O "id++" usa o valor atual primeiro e so depois aumenta "id" em 1.
        // Se fosse "++id", o incremento aconteceria antes, e o primeiro valor entregue seria 2.
        yield id++;
    }
}

// Ao chamar "criadorId()", nao executamos o corpo inteiro da funcao imediatamente.
// Em vez disso, criamos um objeto generator, guardado em "criaId".
// Esse objeto controla as pausas e continuacoes da funcao.
let criaId = criadorId();

// ".next()" manda a generator executar ate encontrar o proximo "yield".
// O retorno de ".next()" e um objeto com propriedades como "value" e "done".
// ".value" pega apenas o valor produzido pelo "yield"; aqui sera 1.
console.log(criaId.next().value);
// Esta segunda chamada continua a generator de onde ela pausou.
// Como "id" foi incrementado depois do primeiro yield, agora ".value" sera 2.
console.log(criaId.next().value);
// A terceira chamada repete o processo e recebe o proximo ID, que sera 3.
// Se criassemos outro generator com "criadorId()", ele comecaria novamente em 1.
console.log(criaId.next().value);
// A quarta chamada continua usando o mesmo estado interno de "criaId".
// Por isso o valor continua subindo, em vez de voltar para 1.
console.log(criaId.next().value);
// A quinta chamada recebe 5, porque cada ".next()" avanca uma vez no loop.
// O loop infinito permite gerar quantos IDs forem necessarios.
console.log(criaId.next().value);
// A sexta chamada recebe 6.
// A generator ainda nao termina porque "while(true)" nunca chega naturalmente ao fim.
// Se o loop tivesse uma condicao de parada, em algum momento ".next()" retornaria "done: true".
console.log(criaId.next().value);
