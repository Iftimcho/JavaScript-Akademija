var allCoef = [];
function addToTicket() {
    var match = document.getElementById("match").value;
    var coef = parseFloat(document.getElementById("coef").value);
    allCoef.push(coef);
    addToTable(match, coef);
};

function addToTable(match, coef) {
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = match;
    td2.innerHTML = coef;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
};

function calculate() {
    res = 1;
    var uplata = parseInt(document.getElementById("uplata").value);
    allCoef.forEach(element => {
        res = 1;
        res *= element;
    });
    var p = document.getElementById("showResult");
    p.innerHTML = res * uplata;
    
};