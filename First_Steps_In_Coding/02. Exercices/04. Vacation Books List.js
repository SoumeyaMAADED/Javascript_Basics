/* Pour les vacances d'été, il y a un certain nombre de livres sur la liste de littérature obligatoire de Joro. Comme Joro 
préfère jouer avec des amis à l'extérieur, votre tâche est de l'aider à calculer le nombre d' heures par jour qu'il doit 
consacrer à la lecture de la littérature nécessaire.

À partir de la console, lisez 3 lignes : 
1. Nombre de pages dans le livre en cours – un entier compris dans l'intervalle [1... 1000] 
2. Pages qui se lisent en 1 heure – un entier compris dans l'intervalle [1... 1000] 
3. Le nombre de jours dont vous avez besoin pour lire le livre – un entier compris dans l'intervalle [1... 1000] 

function numberOfHoursPerDay(input) {
	let numberOfPagesInBook = input[0];
	let readingPagesInOneHour = input[1];
	let numberOfDaystoReadAll = input[2];
	let totalNumberOfHours = (numberOfPagesInBook / readingPagesInOneHour) / numberOfDaystoReadAll;
	console.log(totalNumberOfHours);
}
*/

function numberOfHoursPerDay(numberOfPagesInBook, readingPagesInOneHour, numberOfDaystoReadAll ) {
	let totalNumberOfHours = (numberOfPagesInBook / readingPagesInOneHour) / numberOfDaystoReadAll;
	console.log(totalNumberOfHours);
}

numberOfHoursPerDay([212,20,2]);
numberOfHoursPerDay([432,15,4]);

/* Je créée une fonction numberOfHoursPerDay avec un input vide (les données 
seront entrées ultérieurement par l'appelle de la fonction plus bas), je 
déclare les variables en lui assignant un index dans un tableau, enfin je fais mon calcul.

Temps total de lecture du livre : 212 pages / 20 pages par heure = 10,6 heures au total 
Nombre d'heures par jour : 10,6 heures / 2 jours = 5,3 heures par jour

Temps total de lecture du livre : 432 pages / 15 pages par heure = 28,8 heures au total 
Nombre d'heures par jour : 28,8 heures / 4 jours = 7,2 heures par jour*/
