var moneyZ = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var moneyY = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twenty'];
var moneyX = ['junk', 'twenty', 'thirty', 'fourtee', 'fiftee', 'sixtee', 'seventee', 'eightee', 'ninetee', 'hundred'];

function process() {
    var inputMoney = document.getElementById('sum').value.toString();
    var toPrint = document.getElementById('print');
    toPrint.innerHTML = numberToWords(inputMoney);
}

function numberToWords(inputMoney) {
    inputMoney = inputMoney.toString();
    var inputLenght = inputMoney.length;
    var result;

    if (inputLenght == 1) {
        result = moneyZ[inputMoney - 1];
    }

    if (inputLenght == 2) {


        var temp = (inputMoney % 10) - 1;
        result = moneyY[temp];

    }

    if (inputMoney[0] > 1 && inputLenght == 2) {
        var temp = inputMoney[0] - 1;
        result = moneyX[temp] + ' ' + moneyZ[inputMoney[1] - 1];
        if (inputMoney[1] == 0) {
            result = moneyX[inputMoney[0] - 1];
        }
    }

    if (inputLenght == 3) {

        if (inputMoney[1] == 1) {
            result = moneyZ[inputMoney[0] - 1] + ' hundred and ' + moneyY[inputMoney[2] - 1];
        }

        else {
            result = moneyZ[inputMoney[0] - 1] + ' hundred and ' + moneyX[inputMoney[1] - 1] + ' ' + moneyZ[inputMoney[2] - 1];
        }

        if (inputMoney[1] == 0 || inputMoney[2] == 0) {
            result = moneyZ[inputMoney[0] - 1] + ' hundred';
        }
    }

    if (inputLenght == 4) {
        if (inputMoney[2] == 1) {
            result = moneyZ[inputMoney[0] - 1] + ' thousand and ' + moneyZ[inputMoney[1] - 1] + ' hundred and ' + moneyY[inputMoney[3] - 1];
        }
        else {
            result = moneyZ[inputMoney[0] - 1] + ' thousand and ' + moneyZ[inputMoney[1] - 1] + ' hundred and ' + moneyX[inputMoney[2] - 1] + moneyZ[inputMoney[3] - 1];
        }

        if (inputMoney[1] == 0 && inputMoney[2] == 0 && inputMoney[3] == 0) {
            result = moneyZ[inputMoney[0] - 1] + ' thousands';
        }
    }

    if (inputLenght == 5) {
        result = moneyX[inputMoney[0] - 1] + moneyZ[inputMoney[1] - 1] + ' thousands ' + moneyZ[inputMoney[2] - 1] + ' hundred ' + moneyX[inputMoney[3] - 1] + moneyZ[inputMoney[4] - 1];

        if (inputMoney[3] == 1) {
            result = moneyX[inputMoney[0] - 1] + moneyZ[inputMoney[1] - 1] + ' thousands ' + moneyZ[inputMoney[2] - 1] + ' hundred ' + moneyY[inputMoney[4] - 1];
        }
    }
    return result;
}