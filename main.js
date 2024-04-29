function exibirMensagem(){
    document.getElementById("mensagem").innerHTML = "<span style='color:Blue;'>Olá mundo!</span>";
}

function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let soma = num1 + num2;

    document.getElementById("exibirResultado").innerHTML = `A soma de ${num1} + ${num2} é igual a: <span style="color:red;">${soma}</span>`;
}

function alterarPropriedadeId(){
    const elemento = document.getElementById("meuElementoId");
    elemento.style.color = "Red";
    elemento.style.fontSize = "32px";
}

function alterarPropriedade() {
    var elementos = document.getElementsByName("meuInput");

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "orange";
    }
}

function alterarPropriedadeClasse() {
    var elemento = document.querySelector('.minhaClasse');
    elemento.style.backgroundColor = 'purple';
    elemento.style.color = "white";
    elemento.style.padding = "10px";
}