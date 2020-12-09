const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://randomuser.me/api/?results=10');

xhr.responseType = 'json';

xhr.onload = () => {
    const result = xhr.response;
    for (const user of result.results)
    {
        console.log(user.name.first);
    }
    console.log(result);
}

xhr.send();


fetch('https://randomuser.me/api/?results=10')
.then(response => response.json())
.then(result => {
    console.log(result);
})

async function getEmails(){
    try{
        const result = await fetch('https://randomuser.me/api/?results=10');
        const data = result.json();
        console.log('The data is:');
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

getEmails();
