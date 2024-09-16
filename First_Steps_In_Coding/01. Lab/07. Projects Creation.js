/* Écrivez un programme qui calcule le nombre d'heures qu'il faudra à un architecte pour préparer les projets de 
plusieurs chantiers de construction. */

function numberOfHours(input) {
    let nameOfArchitect = input[0];
    let numberOfProjets = input[1];
    let hoursRequired = 3 * numberOfProjets;
    console.log(`The architect ${nameOfArchitect} will need ${hoursRequired} hours to complete ${numberOfProjets} project/s.`);
}

numberOfHours(["George", 4])
numberOfHours(["Sanya", 9])

/* Je fais une fonction numberOfHours avec des données vides que j'intègrerai en appellant la fonction plus bas, je déclare mes variables nameOfArchitect, numberOfProjects et hoursRequired.
Dans le console.log j'affiche le texte entre accents graves en concaténant les données des trois variabes avec ${}.
*/