//=====================================HORAIRE=====================================//
// document.querySelector('.mainhoraire').innerHTML = ''
const main = document.querySelector('.mainhoraire');
let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const horaire = [{ //Lundi
        jour: weekday[1],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    { //Mardi
        jour: weekday[2],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    { //Mercredi
        jour: weekday[3],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    { //Jeudi
        jour: weekday[4],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    { //Vendredi
        jour: weekday[5],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    { //Samedi
        jour: weekday[6],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    { //Dimanche
        jour: weekday[0],
        hours_Start1: 11,
        hours_Close1: 14,
    },
]

let today = new Date
    const text = document.createElement('h2')
    text.innerText = 'Opening hours'
    text.style.textAlign = 'center'
    main.appendChild(text)

for (let element of horaire) {
    
    const alljour = document.createElement('div')
    alljour.className = 'jour'
    //-----------------Open or Closed-----------------//
    if (element.jour == weekday[today.getDay()]) {
        let heure = today.getHours();
        if ((heure >= element.hours_Start1 && heure < element.hours_Close1) || (heure >= element.hours_Start2 && heure < element.hours_Close2)) {
            alljour.style = 'border: 2px green solid; color: green'
        } else {
            alljour.style = 'border: 2px red solid; color: red'
        }
    }
    
    main.appendChild(alljour)

    const jour = document.createElement('p')
    jour.textContent = element.jour
    alljour.appendChild(jour)

    if (element.jour == 'Sun') {
        const heureSun = document.createElement('p')
        heureSun.textContent = element.hours_Start1 + ":00 " + element.hours_Close1 + ":30"
        alljour.appendChild(heureSun)
        const heurevide = document.createElement('p')
        heurevide.textContent = "Close"
        heurevide.style = "color: red;"
        alljour.appendChild(heurevide)

    } else if (element.jour == 'Mon') {
        const heureMon = document.createElement('p')
        heureMon.classList.add('monday')
        heureMon.textContent = 'Close'
        heureMon.style = "color: red;"
        alljour.appendChild(heureMon)
        const heurevide = document.createElement('p')
        heurevide.textContent = "Close"
        heurevide.style = "color: red;"
        alljour.appendChild(heurevide)

    } else {
        const heureDebut = document.createElement('p')
        heureDebut.textContent = element.hours_Start1 + ":00 " + element.hours_Close1 + ":30"
        alljour.appendChild(heureDebut)
        const heureFin = document.createElement('p')
        heureFin.textContent = element.hours_Start2 + ":00 " + element.hours_Close2 + ":30"
        alljour.appendChild(heureFin)
    }
}
//=====================================HORAIRE FIN=====================================//