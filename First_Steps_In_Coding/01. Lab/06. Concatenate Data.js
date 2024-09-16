/* Écrivez une fonction qui reçoit : nom, prénom, âge et ville et affiche un message du type suivant :  
« You are <Maria> <Ivanova>, a <20>-years old person from <Sofia>."*/

function concatenateData(input) {
    const firstname = input[0];
    const name = input[1];
    let age = input[2];
    let city = input[3];

    console.log(`You are ${firstname} ${name}, a ${age}-years old person from ${city}.`);
}

concatenateData(['Maria', 'Ivanova', 20, 'Sofia'])

/* Remarque !! je ne mets pas de string pour le chiffre 20, car c'est un chiffre donc je n'ai pas besoin de convertir l'âge en Number: Number(input[1]).

Je fais une fonction que j'appelle concatenateData (afin de concatener des données) comme précedemment indiqué dans l'exercice 05. Greeting by Name.js j'ajoute du texte et des données avec le ${} dans le console.log.

J'appelle ma fonction avec les données voulues afin de les afficher dans la console.
*/