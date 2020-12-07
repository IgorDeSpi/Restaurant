document.querySelector('.main').innerHTML=''
const main = document.querySelector('.main');

let weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

const horaire = [
    { //Lundi
        jour: weekday[1],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    { //Mardi
        jour: weekday[2],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    { //Mercredi
        jour: weekday[3],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    { //Jeudi
        jour: weekday[4],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    { //Vendredi
        jour: weekday[5],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    { //Samedi
        jour: weekday[6],
        hours_Start: 12,
        hours_Close: 23,
    },
    { //Dimanche
        jour: weekday[0],
        hours_Start: 12,
        hours_Close: 23,
    },
]

let today = new Date

for (let element of horaire) {
    const alljour = document.createElement('div')
    if ( weekday[6] == weekday[today.getDay()] || weekday[0] == weekday[today.getDay()]) {
        let heure = today.getHours();
        if (heure >= element.hours_Start && heure <= element.hours_Close) {
            alljour.style = 'background-color: green;'
        }
        else {
            alljour.style = 'color: red;'
        }
    }
    else if (element.jour == weekday[today.getDay()] ) {
        let heure = today.getHours();
        if (heure >= element.hours_Start1 && heure < element.hours_Close1 || heure >= element.hours_Start2 && heure < element.hours_Close2) {
            alljour.style = 'background-color: green;'
        }
        else {
            alljour.style = 'color: red;'
        }
    }
    main.appendChild(alljour)

    const jour = document.createElement('p')
    jour.textContent = element.jour
    alljour.appendChild(jour)

    if (element.jour == 'Sat' || element.jour == 'Sun') {
        const heureDebut = document.createElement('p')
        heureDebut.textContent = element.hours_Start +":00 "+ element.hours_Close +":00"
        alljour.appendChild(heureDebut)
    }
    else{
        const heureDebut = document.createElement('p')
        heureDebut.textContent = element.hours_Start1 +":00 "+ element.hours_Close1 +":00"
        alljour.appendChild(heureDebut)
        const heureFin = document.createElement('p')
        heureFin.textContent = element.hours_Start2 +":00 "+ element.hours_Close2 +":00"
        alljour.appendChild(heureFin)
    }
}