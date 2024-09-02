function minhafuncao(arg1, arg2) {
    var soma = arg1 + arg2;
    var msg = 'A soma é igual a ';
    alert(msg + soma);

    var flag = true;

    if (flag)
        alert('Verdadeiro')
    else
        alert('Falso')
}

function raiz(argu1) {
    var raiz = Math.sqrt(argu1);
    alert('A raiz quadrada de ' + argu1 + ' é ' + raiz);
}
function escreve(){
    var texto = prompt("Digite um texto Qualquer")
    document.getElementById("minhaDiv").innerHTML = texto;
}

function escreverNumeros() {
    var n = parseInt(prompt("Digite um número:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido maior que zero.");
        return;
    }

    var div = document.getElementById("numeros");

    div.innerHTML = "";

    for (var i = 1; i <= n; i++) {
        div.innerHTML += i + "<br>";
    }
}

function mostrarTexto() {
    
    var texto = prompt("Digite o texto que deseja mostrar no modal:");

    if (texto) {
        document.getElementById("conteudoModal").innerText = texto;

        var janelaModal = new bootstrap.Modal(document.getElementById('janela'));
        janelaModal.show();
    } else {
        alert("Por favor, insira um texto válido.");
    }
}

