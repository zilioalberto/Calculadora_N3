// Variavel refente a operação
let op = function() {
    alert("Escolha uma opção antes");
    sin.innerText = '?';
    answer_op.innerText = "Escolha uma opção!"
} 

// Variavel refente ao sinal da  operação

//******************************************************************//
//********    Função referente a seleção das operações     *********//
//******************************************************************//

function operation() {
    const answer = document.getElementById('answer');
    const answer_op = document.getElementById('answer_op');
    const select = document.getElementById('operation');
    const sin = document.getElementById('sin');

    const selectedOperation = select.selectedIndex;

    switch (selectedOperation) {
        case 0:
            answer_op.innerText = 'Sem Operação';
            op = function() {
                alert("Escolha uma opção antes");
            } 
            sin.innerText = '?';
            break;
        case 1:
            answer_op.innerText = 'Adição';
            op = sum;
            sin.innerText = '+';
            break;
        case 2:
            answer_op.innerText = 'Subtração';
            op = sub;
            sin.innerText = '-';
            break;
            case 3:
                answer_op.innerText = 'Multiplicação';
                op = mul;
                sin.innerText = 'x';
                break;
            case 4:
                answer_op.innerText = 'Divisão';
                sin.innerText = '/';
                op = div;
                break;
        default:
            
            break;

            break;
    }
}


//******************************************************************//
//*********  Funções para coleta dos dados e calculo       *********//
//******************************************************************//


function calculate() {
    // referências aos elementos
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const answer = document.getElementById('answer');

    // valores dos inputs
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat (num2Input.value);
    const resp = op(num1, num2);

    answer.innerText = resp;
}

//******************************************************************//
//*********       Funções das quatro operações:            *********//
//******************************************************************//

function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if (num2!=0){
        return num1 / num2;
    }
    else{
        return "Erro - Divisão por Zero"
    }
}