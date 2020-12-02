// kodot ke se izvrsuva beskonecno mn pati na sekoi 2 sekundi
// se koristsi koga sakame da napravime update na nekoi podatoci
// pr: na fb se apdejtiraat podatocite posleden odreden interval(vreme)
// setInterval(() => {console.log('This is an interval')}, 2000);

// setTimeout(() => console.log('Hello after 2 seconds'), 2000);
// setTimeout(() => console.log('Hello after 4 seconds'), 4000);
// setTimeout(() => console.log('Hello after 6 seconds'), 6000);

function timingEvent(argument)
{
    let x = setInterval(() => {
        console.log('This is set interval');
    }, 2000);

    setTimeout(() => {
        console.log(argument);
        window.clearInterval(x);
    }, 5000);

    console.log('Timce i Ivona');
}

timingEvent('Elena');