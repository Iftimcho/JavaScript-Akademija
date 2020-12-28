const fs = require('fs');
// import fs from 'fs';  ova moze da se napise vaka dokolku koristime ESLint

// CRUD - Create, Read, Update, Delete Operacii

// Sync method
fs.writeFileSync('./file.txt', "Iftimcho Pop-Icovski. Welcome to 2021! Written from Sync method");

// Async Method   --  Tretiot argument e callback i najcesto se koristi za da se ispecati dokolku nastanala greska
fs.writeFile('./newFile.txt', 'This is written with an async writeFile method', (error) => {
    if(error)
    {
        console.log(error);
    }
    console.log('The file has been saved');
});



// READ 

//  Synchronous method
const data = fs.readFileSync('file.txt');
console.log(data.toString());


//  Asynchronous method

fs.readFile('./newFile.txt', (error, data) => {
    if(error)
    {
        console.log(error);
    }
    console.log(data.toString());
})



// UPDATE -- Za da ne morame sekogas da go prebrisime (overwrite) tekstot tuku mozeme da go prosireme fajlot(da dodademe nesto na veke postoeckata sodrzina)

// Synchronous method

fs.writeFileSync('./newFile.txt', 'Something to add and update!');

// moze i so asinhrona funkcija vo koja treba da se vnesat soodvetnite parametri




// DELETE

// fs.unlinkSync('./newFile.txt');  // ova go brise celiot fajl ne samo tekstot vo fajlot

// fs.unlink('./file.txt', (error) => {    // prima callback kako argument za dokolku nastane nekoja greska pri ovaa operacija. I ova brise cel fajl a ne samo tekstot vo nego.
//     if(error)
//     {
//         console.log(error);
//     }
//     console.log('File deleted successfully');
// }); 



// RENAME

// sinhron metod - Prima stara pateka i nova pateka na fajlot.

// fs.renameSync('./file.txt', './folder/newPathFile.txt');

// fs.renameSync('./newFile.txt', './novFolder/newFileMoved.txt');    OVA VRAKA GRESKA. NE SE KREIRA AVTOMATSKI NOV FOLDER SO OVAA OPERACIJA.
// Asinhron metod. prima stara pateka, nova pateka na fajlot i callback dokolku ima greska.
fs.rename('./folder/file.txt', './newPathFile.txt', (error, text = 'The file has been renamed') => {
    if(error)
    {
        console.log(error);
    }
    console.log(text);
});