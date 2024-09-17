/* Écrivez un programme qui lit un angle en radians (nombre décimal) et le 
convertit en degrés. Utilisez la formule : degré = radian * 180 / π. Le nombre π 
dans les programmes Java est disponible via Math.PI. */

function radiansToDegrees(input) {
    let radians = input[0];
    let degrees = radians *180 / Math.PI;
    console.log(degrees);
}

radiansToDegrees([3.1416])
radiansToDegrees([6.2832])

/* Je crée une fonction radiansToDegree avec un input vide (les données 
seront entrées ultérieurement par l'appelle de la fonction plus bas), je 
déclare la variable radians avec un tableau de données qui seront appelées 
dans la fonction plus bas et une autre variable degrees pour convertir des 
rayons en degrés.
Enfin, j'affiche le résultat dans la console. */
