/*Écrivez  une fonction qui reçoit un entier  et calcule la face carrée du côté donné, ex: 3 square = carré.  
Input =Donnée(s) entrante
Output = Donnée(s) sortante
0 est l'index du tableau, soit le premier élément.

Dans les énoncés des exercices Programming Basics de SoftUni, les nombres sont en String
(entre guillemets) pour nous initier à les convertir en Number dans la fonction.
A partir des fondamentaux il n'y aura plus de chiffres entre guillemets.
*/


// Remplacer l'INPUT () par 5 et vider l'appelle de la focntion plus bas pour voir si le code fonctionne et fais sortir le résulat.

function squareArea(input) {
    let a = Number(input[0]);
    let area = a * a;
    console.log(area);
}

squareArea(["5"])
squareArea(["7"])

/* Je crée une fonction en l'appelant zonecarrée avec une donnée entrante entre parenthèses (que je ferais entrer dans la fonction en bas pour appeler cette dernière avec le paramètres).
Je déclare ma variable avec comme type un nombre.
Je déclare mon calcul a effectuer.
J'affiche ma variable dans console.log
J'entre une donnée avant d'appeler ma fonction.
Cette méthode est simple pour effectuer des calculs rapidement car je ne change uniquement le paramètre de la fonction.
*/
