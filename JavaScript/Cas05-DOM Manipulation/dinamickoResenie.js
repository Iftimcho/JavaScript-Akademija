function getValues() {
    var name = document.getElementById('nameInput').value;
    var lastName = document.getElementById('lastNameInput').value;
    var age = document.getElementById('ageInput').value;
    age = parseInt(age);
    var credentials = [name, lastName, age];
    return credentials;
}

function addUser() {
    var creds = getValues();
    if(creds[0].length > 3 && creds[1].length > 3 && creds[2] >= 18 )
    {
        var table = document.getElementById('table');
        var tr = document.createElement("tr");
        var delButton = document.createElement("button");
        delButton.innerHTML = 'Delete';
        creds.forEach(element => {
            var td = document.createElement("td");
            td.innerHTML = element;
            tr.appendChild(td);
            tr.appendChild(delButton);
            table.appendChild(tr);
        })
    } else {
        console.log('Uslovite ne se ispolneti');
    }
    delButton.onclick = function(){
        var i = delButton.parentNode.rowIndex;
        console.log(i);
        removeUser(i);
    };
    console.log(table.childNodes);
}

function removeUser(index){
   var table = document.getElementById("table");
   if (table.childNodes.length > 2)
   {
       table.removeChild(table.childNodes[index + 1]);
   }
}

var btnAdd = document.getElementById('userBtn').onclick = function() {
    addUser();
}


// var btnDel = document.getElementById('removeBtn').onclick = function() {
//     removeUser();
// }