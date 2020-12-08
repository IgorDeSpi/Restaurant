

const userInput = document.createElement('input')



document.body.appendChild(userInput)
userInput.type = 'text'
/*
let collection = [ 'Dimanche', 'Lundi', 'Mardi', 
'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ];*/



let collection = [
 
    {        
        nom: "brochette de d'inde épicées à la Marocaine",
        
        category: 'Plat Marocain'
    },
    {        
        nom: "boulette de viande à la Marocaine",
        
        category: 'Plat Marocain'
    },
    {        
        nom: "couscous Kabyle",
        
        category: 'Plat Algérien'
    },
    {        
        nom: "couscous d'agneau aux légumes",
        
        category: 'Plat Marocain'
    },
    {        
        nom: "pastila au Poissoin",
        
        category: 'Plat Marocain'
    },
    {        
        nom: "pastila au poulet",
        
        category: 'Plat Marocain'
    },
]
/*
userInput.addEventListener('keyup', (e) => {
    const inputValue = e.target.value
    //const inputValue = userInput.value
    const pattern = new RegExp(inputValue, 'ig')
    const regroupe = []
    for (let i = 0; i <collection.nom.length; i++) {
      if (collection[i].match(pattern)==inputValue ) {
            
            regroupe.push(collection[i])
            
           

        }
       
        //alert(regroupe)
       

    }
    console.log(regroupe);
})*/



userInput.addEventListener('keyup', (e) => {
    const inputValue = e.target.value
    //const inputValue = userInput.value
    const pattern = new RegExp(inputValue, 'ig')
    const regroupe = []
    for (let i = 0; i <collection.length; i++) {
      if (collection[i].nom.match(pattern)==inputValue ) {
            
            regroupe.push(collection[i].nom)
            
           

        }
       
        //alert(regroupe)
       

    }
    console.log(regroupe);
})


