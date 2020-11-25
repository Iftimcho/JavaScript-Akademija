// Ova resenie e so poednostavuvanje na kodot so kreiranje na funkcii za da ne se povtoruva kodot
function takeNumbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    return [num1, num2];
}

function showResult(result)
{
    var p = document.getElementById("result");
    p.innerHTML = 'Result: ' + result;
}


function add() {
    var result = takeNumbers()[0] + takeNumbers()[1]
    showResult(result);
}

function subtract() {
    var result = takeNumbers()[0] - takeNumbers()[1]
    showResult(result);
}

function multiply() {
    var result = takeNumbers()[0] * takeNumbers()[1]
    showResult(result);
}

function divide() {
    var result = takeNumbers()[0] / takeNumbers()[1]
    showResult(result);
}

