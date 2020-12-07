document.querySelector('.main').innerHTML=''
const mainContainer = document.querySelector('.main');

let weekday = [ 'Sun', 'Mon', 'Tue', 
'Wed', 'Thu', 'Fri', 'Sat' ];

const horaire = [
    { //Lundi
        jour: weekday[1],
        hoursstart1: 10,
        hoursclose1: 15,
        hoursstart2: 18,
        hoursclose2: 23,
    },
    { //Mardi
        jour: weekday[2],
        hoursstart1: 10,
        hoursclose1: 15,
        hoursstart2: 18,
        hoursclose2: 23,
    },
    { //Mercredi
        jour: weekday[3],
        hoursstart1: 10,
        hoursclose1: 15,
        hoursstart2: 18,
        hoursclose2: 23,
    },
    { //Jeudi
        jour: weekday[4],
        hoursstart1: 10,
        hoursclose1: 15,
        hoursstart2: 18,
        hoursclose2: 23,
    },
    { //Vendredi
        jour: weekday[5],
        hoursstart1: 10,
        hoursclose1: 15,
        hoursstart2: 18,
        hoursclose2: 23,
    },
    { //Samedi
        jour: weekday[6],
        hoursstart: 12,
        hoursclose: 23,
    },
    { //Dimanche
        jour: weekday[0],
        hoursstart: 12,
        hoursclose: 23,
    },
]

let today = new Date

for (let element of horaire) {
    if ( weekday[6] == weekday[today.getDay()] || weekday[0] == weekday[today.getDay()]) {
        let heure = today.getHours();
        if (heure >= element.hoursstart && heure <= element.hoursclose) {
            console.log('green');
        }
        else {
            console.log('red');
        }
    }
    else if (element.jour == weekday[today.getDay()] ) {
        let heure = today.getHours();
        if (heure >= element.hoursstart1 && heure <= element.hoursclose1 || heure >= element.hoursstart2 && heure <= element.hoursclose2) {
            console.log('green');
        }
        else {
            console.log('red');
        }
    }
}