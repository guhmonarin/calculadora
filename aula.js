


function insert(numero)
{
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + numero;
}
function detecta(teste)
{
    var tecla = teste.key;
    if(tecla >= 0 && tecla <= 9 )
    {
        var num = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = num + tecla;
    }
    else if (tecla == '+' || tecla == '-' || tecla == '*' || tecla == '/')
    {
        var num = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = num + tecla;
    }
    else if(tecla == 'Backspace')
    {
        apagar()
    }
    else if(tecla == '=' || tecla == 'Enter')
    {
        calcular();
    }
    else if(tecla == 'c')
    {
        limpar()
    }
}
function limpar()
{
    document.getElementById('resultado').innerHTML = "";
}

function apagar()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else
    {
        document.getElementById('resultado').innerHTML = "SEM CALCULO"
    }
}

document.onkeydown = function(teste){
    detecta(teste);
}
