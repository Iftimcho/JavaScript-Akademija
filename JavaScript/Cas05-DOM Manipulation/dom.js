// Manipulacija na DOM elementite
// menuvanje, dodavanje, kreiranje novi, brisenje itn....

// 3 nacin na pristap do dokumentot: ID, Klasa i ime na Tag

// var input = document.getElementById("testId").value;

// var input = document.getElementsByClassName("testClass");
// var input = document.getElementsByTagName("input");
// console.log(input);
document.getElementById("nameBtn").onclick = function (){
    // console.log('Button is clicked!');
    
    // var name = document.getElementById("name").value;   so ovoj kod vo name ke se zapise samo string vrednosta i zatoa na taa variabla name ke ne mozeme da povikuvame propertija (.) 
    var name = document.getElementById("name"); 
    var lastName = document.getElementById("lastName");
    if(name.value.length < 3)
    {
        // postavuvanje na CSS klasa na elementot 
        name.setAttribute("class", "redBorder");
        // name.style.border = "1px solid red";
        console.log("Dolzinata na imeto e premnogu mala. minimum 3 karakteri!");
    }
    else
    {
        console.log("Hello " + name.value + " " + lastName.value);
    }

    // promena na vrednost na paragrafot

    var p = document.getElementsByTagName("p")[0];
    p.innerHtml = "Promenet Paragraf!";
    

    // kreiranje na elementi
    var myElement = document.createElement("p");
    myElement.innerHTML = "novo kreiran element preku JavaScript";
    // Morame da go zalepime (dodademe) na nekoj parent element za da moze da ni se pojavi vo DOM
    var myDiv = document.getElementById("myDiv");
    myDiv.appendChild(myElement);
}