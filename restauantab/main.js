
let weekday = [ 'Dimanche', 'Lundi', 'Mardi', 
'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ];

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

const titre=document.createElement('h1')
titre.textContent="Heures d'ouvertures"
document.body.appendChild(titre)

for (let element of horaire) {
   
   
 
   const alljour=document.createElement('div')
   alljour.className='dayOpen'
   //alljour.textContent=element.jour
     document.body.appendChild(alljour)
   const paragraphe=document.createElement('p')
    paragraphe.className='day'
    paragraphe.textContent=element.jour
    alljour.appendChild(paragraphe)

 
  
  // document.body.appendChild(alljour)

    if(element.jour=='Samedi' || element.jour=='Dimanche')
    {
        const heureDebut=document.createElement('p')
        heureDebut.textContent="De "+element.hoursstart+":00"+" à "+element.hoursclose+":00"
        alljour.appendChild(heureDebut)
    }
    else {
        const heureDebut=document.createElement('p')
        heureDebut.textContent="De "+element.hoursstart1+":00"+" à "+element.hoursclose1+":00"
        alljour.appendChild(heureDebut)
        const heureFin=document.createElement('p')
        heureFin.textContent="De "+element.hoursstart2+":00"+" à "+element.hoursclose2+":00"
      alljour.appendChild(heureFin)
    }

   
  
 
    if ( weekday[6] == weekday[today.getDay()] || weekday[0] == weekday[today.getDay()]) {
        let heure = today.getHours();
        if (heure >= element.hoursstart && heure <= element.hoursclose) {
            alljour.style='background-color:green'
        }
        else {
            alljour.style='background-color:red'
        }
    }
    else if (element.jour == weekday[today.getDay()] ) {
        let heure = today.getHours();
        if (heure >= element.hoursstart1 && heure <= element.hoursclose1 || heure >= element.hoursstart2 && heure <= element.hoursclose2) {
            //console.log('green');
            alljour.style='background-color:green'
        }
        else {
            //console.log('red');
            alljour.style='background-color:red'
        }
     
      
        //document.body.innerHTML=element.value 
       
    }
 
  
  
  
    
  
}

document.getElementById('recherche').addEventListener('keyup', function(e) {
  var recherche = this.value.toLowerCase();
  var documents = document.querySelectorAll('.document');
 
  Array.prototype.forEach.call(documents, function(document) {
    // On a bien trouvé les termes de recherche.
    if (document.innerHTML.toLowerCase().indexOf(recherche) > -1) {
      document.style.display = 'block';
    } else {
      document.style.display = 'none';
    }
  });
});
