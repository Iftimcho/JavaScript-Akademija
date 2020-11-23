function add() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var p = document.getElementById("result");
    p.innerHTML = 'Result: ' + num1 + num2;
}

function subtract(num1, num2) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var p = document.getElementById("result");
    p.innerHTML = 'Result: ' + (num1 - num2);
}

function multiply(num1, num2) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var p = document.getElementById("result");
    p.innerHTML = 'Result: ' + num1 * num2;
}

function divide(num1, num2) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var p = document.getElementById("result");
    p.innerHTML = 'Result: ' + num1 / num2;
}




