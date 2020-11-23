// 1. Kreirame click function za button-ot
// 2. Da gi zacuvame podatocite od input-ite
// 3. Kreirame red vo tabelata
// 3.1 Kreirame 3 td ili kelii
// 4. Da gi zalepime(dodadime) tr vo table
// 5*. Moze da si igrame i da dodademe validacija
// 6*. Moze da si igrame i da briseme elementi od tabelata


document.getElementById("userBtn").onclick = function() {
    var name = document.getElementById("nameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var age = document.getElementById("ageInput").value;
    // var tdName = document.createElement("td");
    // tdName.innerHTML = name;
    // var tdLastName = document.createElement("td");
    // tdLastName.innerHTML = lastName;
    // var tdAge = document.createElement("td");
    // tdAge.innerHTML = age;
    var tds = [name, lastName, age];
    if(tds[0].length > 3 && tds[1].length > 3 && tds[2] >= 18 )
    {
        var table = document.getElementById("table");
        var tr = document.createElement("tr");
        var btn = document.createElement("button");
        btn.setAttribute("id", "btnRem")
        btn.innerHTML = "X";
        tds.forEach(element => {
            var td = document.createElement("td");
            td.innerHTML = element;
            tr.appendChild(td);
            tr.appendChild(btn);
            table.appendChild(tr);
        });

        btn.onclick = function() {
            /*
                Brisenje
            element = element.removeChild(firstChild); go prisi prvoto dete
            moze da se iskoristat childNode, firstChild, lastChild, konkreten element pr: row, td i taka natamu..
            */ 
           if (table.childNodes.length > 2)
           {
               // ova go brisi posledniot red od tabelata
               table.removeChild(table.lastChild);
           }
        }
        
    } else {
        console.log('Uslovite ne se ispolneti!');
    }
    console.log(tds);

    var h3 = document.getElementById("headerUsers");
    h3.setAttribute("class", "setAttribute");
}

// remove user

document.getElementById("btnRem").onclick = function() {
    /*
        Brisenje
    element = element.removeChild(firstChild); go prisi prvoto dete
    moze da se iskoristat childNode, firstChild, lastChild, konkreten element pr: row, td i taka natamu..
    */ 
   var usersTable = document.getElementById("table");
   if (usersTable.childNodes.length > 2)
   {
       usersTable.removeChild(usersTable.lastChild);
   }
}