// Declaramos a funcao "verificarNumero", que recebe um valor chamado "num".
// O objetivo dela e verificar se esse valor e igual a 2.
function verificarNumero(num) {
    // A funcao retorna uma Promise porque o resultado pode ser de sucesso ou erro.
    // "resolve" sera usado quando a verificacao der certo.
    // "reject" sera usado quando a verificacao der errado.
    // Se retornassemos apenas true ou false, nao estaríamos praticando o fluxo de Promises.
    return new Promise((resolve, reject) => {
        // Este if testa se "num" e igual a 2.
        // Foi usado "==" em vez de "==="; com "==", o JavaScript permite algumas conversoes de tipo.
        // Por exemplo, "2" == 2 seria verdadeiro; com "===", seria falso porque string e numero sao tipos diferentes.
        if (num == 2) {
            // Se o numero for 2, chamamos resolve para indicar sucesso.
            // Aqui o console.log executa primeiro e retorna undefined, entao a Promise resolve com undefined.
            // Uma forma mais limpa seria resolver o texto e fazer o console.log em um then.
            resolve(console.log(`O número é ${num}`));
        // O else roda quando a condicao do if e falsa.
        // Ou seja, qualquer valor diferente de 2 entra neste bloco.
        } else {
            // reject indica que a Promise falhou.
            // Criamos um Error para representar a causa da falha.
            // Se nao houvesse um catch depois, essa rejeicao poderia aparecer como erro nao tratado no console.
            reject(new Error("Deu errado porque o número não é 2"));
        }
    });
}

// Chamamos a funcao passando 2.
// Como 2 satisfaz a condicao do if, a Promise sera resolvida e a mensagem sera exibida.
verificarNumero(2);
// Chamamos a funcao passando 3.
// Como 3 nao e igual a 2, a Promise sera rejeitada.
// Como nao existe ".catch()" nesta chamada, o navegador ou Node pode mostrar uma rejeicao nao tratada.
verificarNumero(3);
