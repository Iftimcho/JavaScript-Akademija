var name = prompt('Enter student name...');
var numberOfSubjects = prompt('Enter number of subjects...');
// go konvertirame number of subjects od string vo integer(broj) za da go imame kako broj
// bidejki, sekoj vnes vo prompt ke bide zeman kako string
numberOfSubjects = parseInt(numberOfSubjects);

var subjects = [];

// Vnesuvame ocenki za predmetite
for(i = 0; i < numberOfSubjects; i++)
{
    let grade = prompt('Enter grade for subject ' + i + ' :');
    grade = parseInt(grade);
    subjects.push(grade);
}

console.log('Entered grades are:');
var i = 0;
while(i < numberOfSubjects)
{
    console.log('Subject ' + i + ' has grade :' + subjects[i]);
    i++;
}

// presmetka na suma od ocenkite
var sum = 0;
subjects.forEach(element => {
    sum += element;
})

console.log('The sum is : ' + sum);

// presmetka na prosek. toFixed(2) go zaokruzuva decimalniot broj na 2 decimali.
console.log('Studentot : ' + name + ' ima prosek ' + (sum / subjects.length).toFixed(2));