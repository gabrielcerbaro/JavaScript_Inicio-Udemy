// Este console.log executa imediatamente quando o JavaScript le esta linha.
// Ele mostra o texto "Gabriel" no console antes de qualquer codigo agendado com setTimeout.
// Se esta linha viesse depois do setTimeout, ela ainda poderia aparecer antes do sobrenome, porque o setTimeout espera 3 segundos.
console.log("Gabriel");

// setTimeout agenda uma funcao para ser executada depois de um tempo determinado.
// Ele e usado aqui para demonstrar codigo assincrono: o JavaScript nao fica parado esperando os 3 segundos.
setTimeout(function (){
    // Esta funcao e o callback: uma funcao passada como argumento para ser chamada depois.
    // Quando os 3 segundos terminarem, este console.log mostrara "Cerbaro" no console.
    // Se nao usassemos uma funcao aqui, o codigo seria executado imediatamente, e nao depois do tempo.
    console.log("Cerbaro");
// O valor 3000 representa 3000 milissegundos, ou seja, 3 segundos.
// Se fosse 1000, o sobrenome apareceria depois de 1 segundo; se fosse 0, ainda seria agendado para depois do codigo sincrono atual.
}, 3000);

// Este console.log tambem executa imediatamente, sem esperar o setTimeout terminar.
// Por isso esta mensagem aparece antes de "Cerbaro", mesmo estando escrita depois do setTimeout.
// Isso mostra que o JavaScript continua executando o resto do arquivo enquanto espera o callback.
console.log("O meu sobrenome vai aparecer aqui em baixo apenas e não acima")
