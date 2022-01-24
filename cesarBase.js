
var select = document.querySelector('.selecionar');
var botaoResultado = document.querySelector("#verificar");
var incremento = document.querySelector('#numero');
var labelIncremento = document.querySelector('.incremento');
var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// ocultar e exibir o label do incremento ao selecionar cifra de césar
select.addEventListener('click', function () {
    if (select.value == 'cesar') {
        labelIncremento.style.display = 'flex';
        incremento.style.display = 'flex';
    } else {
        labelIncremento.style.display = 'none';
        incremento.style.display = 'none';
    }
});

// selecionar o radio e select
botaoResultado.addEventListener('click', function () {
    let radio = document.getElementsByName('cod');
    if (radio[0].checked && select.value == 'cesar') {
        cesarCodificado();
    } else if (radio[1].checked && select.value == 'cesar') {
        cesarDecodificado();
    } else if (radio[0].checked && select.value == 'base64') {
        baseCodificada();
    } else if (radio[1].checked && select.value == 'base64') {
        baseDecodificada();
    }
});

    // função César codificado
function cesarCodificado() {
    let letra = document.querySelector('.text').value.toLowerCase();
    let incremento = document.getElementById('numero').value;
    let inteiro = parseInt(incremento);
    let resultado = '';

    if (incremento > 25 || incremento < 1) {
        document.querySelector('.resultado').innerHTML = `Incremento inválido! insira incremento de 1 a 25.`;
    } else {
        for (let i = 0; i < letra.length; i++) {
            if (letra[i] != " ") {
                for (let j = 0; j < alfabeto.length; j++) {
                    if (letra[i] == alfabeto[j]) {
                        resultado += alfabeto[(j + inteiro) % alfabeto.length];
                    }
                }
            }
            else {
                resultado += " ";
            }
        }
        document.querySelector('.resultado').innerHTML = `${resultado}`;
    }
    return resultado;
};

    // função César decodificado
function cesarDecodificado() {
    let letra = document.querySelector('.text').value.toLowerCase();
    let incremento = document.getElementById('numero').value;
    let inteiro = parseInt(incremento);
    let resultado = '';

    if (incremento > 25 || incremento < 1) {
        document.querySelector('.resultado').innerHTML = `Incremento inválido! insira incremento de 1 a 25.`;
    } else {
        for (let i = 0; i < letra.length; i++) {
            if (letra[i] != " ") {
                for (let j = 0; j < alfabeto.length; j++) {
                    if (letra[i] == alfabeto[j] && (j - inteiro) % 26 >= 0) {
                        resultado += alfabeto[(j - inteiro) % 26];
                    }
                    else if (letra[i] == alfabeto[j] && (j - inteiro) % 26 < 0) {
                        resultado += alfabeto[26 + (j - inteiro) % 26];
                    }
                }
            }
            else {
                resultado += " ";
            }
        }
        document.querySelector('.resultado').innerHTML = `${resultado}`;
    }
    return resultado;
};

function baseCodificada() {
    let letra = document.querySelector('.text').value;
    let resultado = btoa(letra);
    return document.querySelector('.resultado').innerHTML = `${resultado}`;
};

function baseDecodificada() {
    let letra = document.querySelector('.text').value;
    let resultado = atob(letra);
    return document.querySelector('.resultado').innerHTML = `${resultado}`;
};