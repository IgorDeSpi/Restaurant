document.querySelector('.allCard').innerHTML = ''
const sectionCarte = document.querySelector('.allCard');

const menu =[
    {
        image: './Images/FOOD/Food Cala.jpg',
        nom: 'Fried Squid',
        description: 'Fried squid, tamarind sauce.',
        prix: '12€',
    },
    {
        image: './Images/FOOD/Food roulo.jpg',
        nom: 'Spring Rolls',
        description: 'Spring rolls, scampis, dried pork powder.',
        prix: '15€',
    },
    {
        image: './Images/FOOD/Food papaye.jpg',
        nom: 'Papaya',
        description: 'Papaya salad, chilli sauce.',
        prix: '12€',
    },
    {
        image: './Images/FOOD/Food palourdes.jpg',
        nom: 'Clams',
        description: 'Clams, coconut milk, combava.',
        prix: '13€',
    },
    {
        image: './Images/FOOD/Food nouilles.jpg',
        nom: 'Rice Noodles',
        description: 'Round rice noodles, salsicia, chilli.',
        prix: '18€',
    },
    {
        image: './Images/FOOD/Food poulet.jpg',
        nom: 'Chicken curry',
        description: "Boneless free-range chicken leg with curry, 'ban-mhi'.",
        prix: '17€',
    },
    {
        image: './Images/FOOD/Food ventrechje.jpg',
        nom: 'Ventreche',
        description: 'Roasted prok belly with 5 flavors.',
        prix: '16€',
    },
    {
        image: './Images/FOOD/Food-Lunch.jpg',
        nom: 'Bô lok lak',
        description: 'Pork cheek, poached eggs, radish, pak choï.',
        prix: '14€',
    },
    {
        image: './Images/FOOD/Food-poiro.jpg',
        nom: 'Leeks',
        description: 'Leeks, coconut milk, chilli.',
        prix: '8€',
    },
    {
        image: 'Images/FOOD/Food desert.jpg',
        nom: 'Chocolate dessert',
        description: 'Home made chocolate yogurt ice cream pralines.',
        prix: '10€',
    },
]


for (let element of menu){
    const carte = document.createElement('div');
    carte.className = 'card column m-2 p-0 is-3';
    sectionCarte.appendChild(carte);

    const imageZone = document.createElement('header');
    imageZone.className = 'card-image';
    carte.appendChild(imageZone);

    const imageFigure = document.createElement('figure');
    imageFigure.className = 'image is-4by3';
    imageZone.appendChild(imageFigure);

    const image = document.createElement('img');
    image.className = 'tailleImage';
    image.src = element.image;
    imageFigure.appendChild(image);

    const mainCarte = document.createElement('main');
    mainCarte.className = 'p-2 is-flex-direction-column main';
    carte.appendChild(mainCarte);

    const titreCarte = document.createElement('h1');
    titreCarte.className = 'card-header-title is-centered title is-4';
    titreCarte.textContent = element.nom;
    mainCarte.appendChild(titreCarte);

    const descriptionCarte = document.createElement('p');
    descriptionCarte.className = 'subtitle is-6';
    descriptionCarte.textContent = element.description;
    mainCarte.appendChild(descriptionCarte);

    const zonePrix = document.createElement('footer');
    zonePrix.className = 'p-2 is flex-direction-column';
    carte.appendChild(zonePrix);

    const price = document.createElement('p');
    price.textContent = 'Price';
    zonePrix.appendChild(price);
    
    const prix = document.createElement('p');
    prix.className = 'has-text-right has-text-weight-semibold';
    prix.textContent = element.prix;
    zonePrix.appendChild(prix);

    const allAchat = document.createElement('p');
    allAchat.className = 'has-text-centered'
    zonePrix.appendChild(allAchat);

    const lienAchat = document.createElement('botton');
    lienAchat.className = 'button'
    lienAchat.textContent = 'Add to Basket';
    allAchat.appendChild(lienAchat);

    const iconAchat = document.createElement('i');
    iconAchat.className = 'fas fa-cart-plus'
    lienAchat.appendChild(iconAchat);
}

document.querySelector('#RechercheBar')
.addEventListener('keyup', input => {
	optionSearch(input.target.value.toLowerCase())
})

function optionSearch(pattern) {
    const usertape = []
 
    for(let filtre of menu){
        if(filtre.nom.toLowerCase().match(pattern))
    	usertape.push(filtre)
    }

    const mainFiltre = document.querySelector('#results')
    mainFiltre.innerHTML = ''
    sectionCarte.innerHTML = ''

    for (let element of usertape){
        const carte = document.createElement('div');
        carte.className = 'card column m-2 p-0 is-3';
        mainFiltre.appendChild(carte);
    
        const imageZone = document.createElement('header');
        imageZone.className = 'card-image';
        carte.appendChild(imageZone);
    
        const imageFigure = document.createElement('figure');
        imageFigure.className = 'image is-4by3';
        imageZone.appendChild(imageFigure);
    
        const image = document.createElement('img');
        image.className = 'tailleImage';
        image.src = element.image;
        imageFigure.appendChild(image);
    
        const mainCarte = document.createElement('main');
        mainCarte.className = 'p-2 is-flex-direction-column main';
        carte.appendChild(mainCarte);
    
        const titreCarte = document.createElement('h1');
        titreCarte.className = 'card-header-title is-centered title is-4';
        titreCarte.textContent = element.nom;
        mainCarte.appendChild(titreCarte);
    
        const descriptionCarte = document.createElement('p');
        descriptionCarte.className = 'subtitle is-6';
        descriptionCarte.textContent = element.description;
        mainCarte.appendChild(descriptionCarte);
    
        const zonePrix = document.createElement('footer');
        zonePrix.className = 'p-2 is flex-direction-column';
        carte.appendChild(zonePrix);
    
        const price = document.createElement('p');
        price.textContent = 'Price';
        zonePrix.appendChild(price);
        
        const prix = document.createElement('p');
        prix.className = 'has-text-right has-text-weight-semibold';
        prix.textContent = element.prix;
        zonePrix.appendChild(prix);
    
        const allAchat = document.createElement('p');
        allAchat.className = 'has-text-centered'
        zonePrix.appendChild(allAchat);
    
        const lienAchat = document.createElement('botton');
        lienAchat.className = 'button'
        lienAchat.textContent = 'Add to Basket';
        allAchat.appendChild(lienAchat);

        const iconAchat = document.createElement('i');
        iconAchat.className = 'fas fa-cart-plus'
        lienAchat.appendChild(iconAchat);
    }
}