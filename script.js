var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var manoel = { nome: "Manoel", vitorias: 3, empates: 0, derrotas: 1, pontos: 0 };

var jogadores = [rafa, paulo, manoel];

function calculaPontos(jogador) {
    var points = jogador.vitorias * 3 + jogador.empates;
    jogador.pontos = points;
}

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr>"
            + "<td>" + jogadores[i].nome + "</td>"
            + "<td>" + jogadores[i].vitorias + "</td>"
            + "<td>" + jogadores[i].empates + "</td>"
            + "<td>" + jogadores[i].derrotas + "</td>"
            + "<td>" + jogadores[i].pontos + "</td>"
            + "<td><button onClick='adicionarVitoria(" + i + ")'>Adicionar Vitória</button>"
            + "<button onClick='removerVitoria(" + i + ")'>Remover Vitória</button></td>"
            + "<td><button onClick='adicionarEmpate(" + i + ")'>Adicionar Empate</button>"
            + "<button onClick='removerEmpate(" + i + ")'>Remover Empate</button></td>"
            + "<td><button onClick='adicionarDerrota(" + i + ")'>Adicionar Derrota</button>"
            + "<button onClick='removerDerrota(" + i + ")'>Remover Derrota</button></td>"
            + "</tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function removerVitoria(i) {
    var jogador = jogadores[i];
    if (jogador.vitorias > 0) {
        jogador.vitorias--;
    }
    calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function removerEmpate(i) {
    var jogador = jogadores[i];
    if (jogador.empates > 0) {
        jogador.empates--;
    }
    calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function removerDerrota(i) {
    var jogador = jogadores[i];
    if (jogador.derrotas > 0) {
        jogador.derrotas--;
    }
    calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
    var nomeJogador = document.getElementById("nomeJogador").value;
    var novoJogador = { nome: nomeJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
    if (nomeJogador != '') {
        jogadores.push(novoJogador);
    }
    exibeJogadoresNaTela(jogadores);
}