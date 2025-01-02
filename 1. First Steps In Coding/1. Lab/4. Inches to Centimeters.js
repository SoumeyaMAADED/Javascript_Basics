/*Écrivez une fonction qui lit à partir de la console un nombre réel et le convertit de pouces en centimètres. Pour ce 
faire, multipliez les pouces par 2,54 (1 pouce = 2,54 centimètres).
*/

function convertisseur(input){
    const inch = 2.54;
    let centimeters = Number(input[0]) * inch;
    console.log(centimeters);
}

convertisseur(["5"])
convertisseur(["7"])

/* input est un paramètre (entre parenthèses), une donnée qui sera entrée lors de l'appel de la fonction tout en bas, par exemple ici: 
convertisseur()
Je déclare ensuite ma constante const (car elle ne change pas) qui vaut 2.54 cm pour un pouce, ensuite je déclare une variable let qui changera 
de résultat à chaque donnée différent entrée.
Résultat de 5 pouces = 12.7 cm
Résultat de 7 pouces = 17.78 cm
*/