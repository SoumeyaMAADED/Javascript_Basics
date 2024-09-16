/* Écrivez une fonction qui récupère le nom d'une personne et affiche « Bonjour, <nom > !« , où <nom> est le 
nom saisi par la console. 
*/

function greetings (input){
    const name = input[0];
    console.log("Hello, " + name + "!" );
}

greetings(["Soumeya"])

/* Autre méthode plus simple, console.log(`Hello, ${name}!`)

On ouvre des parenthèses en ajoutant le texte qu'on voudra afficher entre guillemets simples, la concaténation d'une variable avec le texte se fait 
avec le symbole dollar devant les accolades en incuant dans ces dernières le nom de la variable ex: ${nomDeLaVariable}
*/
