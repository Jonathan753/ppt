var elementos = document.querySelectorAll('.player-options div img');
var enemyOptions = document.querySelectorAll('.enemy-options div img');
var playerOpt = "";
var enemyOpt = "";


const ResetOpacityPlayer = () => { // função criada para resetar a opacidade das outras opções do player
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}

const ResetOpacityEnemy = () => { // função criada para resetar a opacidade das outras opções do adversário
    for (var i = 0; i < elementos.length; i++) {
        enemyOptions[i].style.opacity = 0.3;
    }
}

const inimigoJogar = () => {
    let rand = Math.floor(Math.random() * 3); // O "Math.floor" faz arredondar e o "Math.random" lhe da um número aleatorio de 0 a 1, portanto necessário mutiplicar por 3 para ter um resultado de 0 a 2;
    ResetOpacityEnemy();
    for (var i = 0; i < enemyOptions.length; i++) {
        if (i == rand) { // Quando o valor aleatorio for igual a posição de i
            enemyOptions[i].style.opacity = 1; // Deixa a imagem na posição de i com a opacidade 1
            enemyOpt = enemyOptions[i].getAttribute('opt'); // Pega o resultado do atributo "opt"
        }
    }
}

const ValidarVitoria = () => { // Função criada para validar cada resultado
    let resultado = document.querySelector('.vencedor');
    if (playerOpt == 'papel') {
        if (enemyOpt == 'papel') {
            resultado.innerHTML = 'Empate!';
        } else if (enemyOpt == 'pedra') {
            resultado.innerHTML = 'Você ganhou!';
        } else if (enemyOpt == 'tesoura') {
            resultado.innerHTML = 'Você perdeu!'
        }
    }

    if (playerOpt == 'pedra') {
        if (enemyOpt == 'pedra') {
            resultado.innerHTML = 'Empate!';
        } else if (enemyOpt == 'tesoura') {
            resultado.innerHTML = 'Você ganhou!';
        } else if (enemyOpt == 'papel') {
            resultado.innerHTML = 'Você perdeu!'
        }
    }

    if (playerOpt == 'tesoura') {
        if (enemyOpt == 'tesoura') {
            resultado.innerHTML = 'Empate!';
        } else if (enemyOpt == 'papel') {
            resultado.innerHTML = 'Você ganhou!';
        } else if (enemyOpt == 'pedra') {
            resultado.innerHTML = 'Você perdeu!'
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (t) => { // Cria um evento de click, nesse casso e necessario ter um retorno por isso a função target
        ResetOpacityPlayer(); // outras imagens com opacity 0.3
        t.target.style.opacity = 1; // Opção do player selecionada com opacidade 1
        playerOpt = t.target.getAttribute('opt'); // Salva a opção selecionada nessa variavel
        inimigoJogar(); // Fução para atividade do adversário
        ValidarVitoria(); // Verificação do resultado
    });
}