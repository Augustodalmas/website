var divAtualmenteAberta = null;
var Tecs = document.getElementById('div0');

function alternarDiv(divId) {
var divSelecionada = document.getElementById(divId);
    Tecs.style.display = 'none';

if (divAtualmenteAberta && divAtualmenteAberta !== divSelecionada) {
    divAtualmenteAberta.style.display = "none";
}

if (divSelecionada.style.display === "none") {
    divSelecionada.style.display = "flex";
    divAtualmenteAberta = divSelecionada;
} else {
    divSelecionada.style.display = "none";
    Tecs.style.display = 'block'; //Quando nao houver Nada na tela, será adicionado a legenda de Descrição
    divAtualmenteAberta = null;
}
}