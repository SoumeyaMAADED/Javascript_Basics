/* Pour  son  anniversaire,  Lioubomir  a  reçu  un  aquarium  en  forme  de  parallélépipède.  Dans  un  premier  temps,  nous 
lisons  sur  la  console  sur  des  rangées  séparées  ses  dimensions  –  longueur,  largeur  et  hauteur  en  centimètres.  Il 
convient  de  calculer  combien  de  litres  d'eau  l'aquarium  collectera,  si  l'on  sait  qu'un  certain  pourcentage  de  sa 
capacité est occupé par le sable, les plantes, le chauffage et la pompe.

Un litre d'eau est égal à un décimètre cube / 1l = 1 dm3 /.  
Écrivez un programme qui calcule les litres d'eau nécessaires pour remplir l'aquarium.

À partir de la console, lisez 4 lignes : 
1. Longueur en cm – un entier compris entre [10 ... 500] 
2. Largeur en cm – un entier compris entre [10 ... 300] 
3. Hauteur en cm – un entier compris entre [10... 200] 
4. Pourcentage – nombre réel compris entre [0,000 ... 100.000]

Imprimez un numéro sur la console : 
• les litres d'eau que l'aquarium va recueillir.*/

function fishTank (input){
    const lenght = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percentage = Number(input[3]);
    const literneeded = 
    console.log(literneeded);
}

fishTank([85,75,37,17])
fishTank([105,77,89,18.5])

/* Code conforme et concis.

function fishTank (length, width, height, percentage) {
    const literneeded = 
    console.log(literneeded)
}
fishTank(85,75,37,17)
fishTank([105,77,89,18.5])

*/
