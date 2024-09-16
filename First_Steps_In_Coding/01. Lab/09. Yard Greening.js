/* Bozhidara possède plusieurs maisons sur la côte de la mer Noire et souhaite aménager les cours de certaines 
d'entre elles, créant ainsi une atmosphère chaleureuse et confortable pour ses invités. 
Écrivez un programme qui calcule le montant requis que Bozhidara devra payer à l'entrepreneur.
Le prix d'un mètre carré est de 7,61 BGN avec TVA. Parce que son chantier est assez grand, l'entreprise entrepreneuse 
offre une réduction de 18% sur le prix final.

1. Calculez le coût de l'aménagement paysager de 
   l'ensemble de la cour.
2. Déduisez la réduction (18 % = 0,18) du total.
3. Calculez le prix final de la prestation.
*/

function sumRequired (input){
    const priceSquareMeter = 7.61;
    const discount = 0.18;
    let courtSquareMeter = input[0];
    let courtPrice = priceSquareMeter*courtSquareMeter;
    let reduction= discount*courtPrice;
    let totalPrice = courtPrice-reduction;
    console.log(`The final price is: ${totalPrice}€`);
    console.log(`The discount is: ${reduction}€`);
}

sumRequired([550])
sumRequired([150])

// Les valeurs dans l'input sont les mètres carrés.

/* Je crée une fonction sumRequired avec une donnée vide (input) que je rentrerai plus tard en appellant la fonction.
Je déclare mes variables:
 "priceSquareMeter" qui correspond au prix du mètre carré;
 "discount" correspondant à la remise en pourcentage, ici les 18% ne peuvent pas être calculé directement sur 
  Javascript (ni dans un autre langage de programmmation), il faut d'abbord les convertir en chiffre décimal, par
  exemple: 18 %, c'est 18 ÷ 100 = 0,18.
 "courtSquareMeter" correspond au mètre carré de la cour avec une donnée entrante (input);
 "courtPrice" correspondant 
*/