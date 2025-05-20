function sortear() {
    // Obtém a quantidade de números a serem sorteados do input com o id 'quantidade' e converte para inteiro.
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // Obtém o valor inicial do intervalo do input com o id 'de' e converte para inteiro.
    let de = parseInt(document.getElementById('de').value);
    // Obtém o valor final do intervalo do input com o id 'ate' e converte para inteiro.
    let ate = parseInt(document.getElementById('ate').value);

    // Inicializa um array vazio para armazenar os números sorteados.
    let sorteados = [];
    let numero;
    // Calcula o número total de valores distintos possíveis no intervalo [de, ate].
    let totalNoIntervalo = ate - de + 1;


    // Verifica se é possível sortear a quantidade desejada de números distintos dentro do intervalo.
    if(totalNoIntervalo < quantidade){
        // Se não for possível, exibe um alerta ao usuário.
        alert(`Impossível sortear ${quantidade} números distintos entre ${de} e ${ate}. Por favor altere os parâmetros.`);
        // Limpa os valores dos campos 'quantidade', 'de' e 'ate'.
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
    } else {
        // Se for possível sortear a quantidade desejada:
        // Loop para sortear a quantidade de números especificada.
        for (let i = 0; i < quantidade; i++){
            // Obtém um número aleatório dentro do intervalo [de, ate].
            numero = obterNumeroAleatorio(de, ate);
            // Enquanto o número gerado já estiver no array de sorteados, gera um novo número.
            while (sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de, ate);;
            }
            // Adiciona o número sorteado ao array de sorteados.
            sorteados.push(numero);
        }

        // Ordena o array de números sorteados em ordem crescente.
        sorteados.sort(function(a, b){
            return a - b;;
        });
        
        // Obtém o elemento HTML onde o resultado será exibido.
        let resultado = document.getElementById('resultado');
        // Atualiza o conteúdo HTML para mostrar os números sorteados.
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
        // Chama a função para alterar o status do botão de reiniciar.
        alterarStatusBotao();
    }
}


// Função para obter um número inteiro aleatório dentro de um intervalo [min, max].
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alterar o status (habilitado/desabilitado) do botão de reiniciar.
function alterarStatusBotao(){
    // Obtém o elemento do botão de reiniciar pelo seu ID.
    let botao = document.getElementById('btn-reiniciar');
    // Verifica se o botão possui a classe de desabilitado.
    if(botao.classList.contains('container__botao-desabilitado')){
        // Se estiver desabilitado, remove a classe de desabilitado e adiciona a classe de habilitado.
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        // Se estiver habilitado, remove a classe de habilitado e adiciona a classe de desabilitado.
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}

// Função para reiniciar o sorteador, limpando os campos e o resultado.
function reiniciar(){
    // Limpa o valor do campo 'quantidade'.
    document.getElementById('quantidade').value = '';
    // Limpa o valor do campo 'de'.
    document.getElementById('de').value = '';
    // Limpa o valor do campo 'ate'.
    document.getElementById('ate').value = '';
    // Reseta a área de resultado para a mensagem inicial.
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: \xa0nenhum até agora</label>';
    // Chama a função para alterar o status do botão de reiniciar.
    alterarStatusBotao();
}