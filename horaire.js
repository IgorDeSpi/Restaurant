//=====================================HORAIRE=====================================//
document.querySelector('.mainhoraire').innerHTML=''
const main = document.querySelector('.mainhoraire');
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
        hours_Start1: 12,
        hours_Close1: 23,
    },
    { //Dimanche
        jour: weekday[0],
        hours_Start1: 12,
        hours_Close1: 23,
    },
]

let today = new Date

for (let element of horaire) {
    const alljour = document.createElement('div')
    alljour.className= 'jour'
    //-----------------Open or Closed-----------------//
    if (element.jour == weekday[today.getDay()] ) {
        let heure = today.getHours();
        if ((heure >= element.hours_Start1 && heure < element.hours_Close1) || (heure >= element.hours_Start2 && heure < element.hours_Close2)) {
            alljour.style = 'border: 2px green solid; color: green'
        }
        else {
            alljour.style = 'border: 2px red solid; color: red'
        }
    }
    main.appendChild(alljour)

    const jour = document.createElement('p')
    jour.textContent = element.jour
    alljour.appendChild(jour)

    if (element.jour == 'Sat' || element.jour == 'Sun') {
        const heureWeekend = document.createElement('p')
        heureWeekend.textContent = element.hours_Start1 +":00 "+ element.hours_Close1 +":00"
        alljour.appendChild(heureWeekend)
        const heurevide = document.createElement('p')
        heurevide.textContent = "Kill Bg"
        heurevide.style = "color: white;"
        alljour.appendChild(heurevide)
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
//=====================================HORAIRE FIN=====================================//
