/*Écrivez un programme qui calcule le coût d'achat de la nourriture pour chiens et chats. La nourriture pour chiens coûte 2,50 € et un paquet de nourriture pour chats coûte 4€.
*/

function petsFood (input){
    const priceFoodDogs = 2.5;
    const priceFoodCats = 4;
    const totalPrice = (input[0]*priceFoodDogs)+(input[1]*priceFoodCats)
    console.log(`${totalPrice}€`);
}

petsFood([5,4]);
petsFood([13,9]);

/* Je fais une fonction petsFood avec une donnée vide entre parenthèses (input) que je rentrerai plus bas par l'appel de la fonction.
Je déclare mes variables priceFoodDogs et priceFoodCats et le calcul de totalPrice avec ces données et les données à rentrer (input[0] et input[1]).
J'affiche dans la console le totalPrice avec la syntax ${} entre les accents graves et en ajoutant le symbole €.
*/