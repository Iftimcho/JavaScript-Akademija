let promise = new Promise((resolve,reject) => {
    let domasna = false;
    if(domasna == true)
    {
        resolve("Success");
    }
    else
    {
        reject("Failure");
    }
});

// resolve e arrow funkcijata vo then
promise.then((res) => {
    console.log(res);
})
// reject e arrow funkcijata vo catch
.catch((err) => {
    console.log(`There was an error. The error is: ${err}`);
});
// prviot argument na getCurrentPosition() e sekogas funkcija koja sto treba da primi eden parametar
navigator.geolocation.getCurrentPosition((position) => {
    console.log('Latitude: ' +position.coords.latitude);
});

const getPosition = () => {
    return new Promise((resolve, reject) => {
        // ovaa funkcija 
        // prviot argument na getCurrentPosition() e sekogas funkcija koja sto treba da primi eden parametar
        navigator.geolocation.getCurrentPosition(
            success => {
                resolve(success);
            },
            error => {
                reject(error);
            }
        )
    })
}


const setTimer = vreme => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, vreme)
    });
}

function getUserPosition() {
    let positionData;
    getPosition().then((position) => {
        positionData = position;
        return setTimer(2000);
    })
    // ovoj then se odnesuva na promise-ot vo setTimer funkcijata
    .then(str=> {
        console.log(str, positionData);
    })
    // ovoj catch e za getPosition promise-ot
    .catch((err) => {
        console.log(err);
    })
}

getUserPosition();