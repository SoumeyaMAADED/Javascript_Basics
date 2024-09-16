/* Écrivez une fonction pour convertir les dollars américains (USD) en leva bulgare (BGN).
Utilisez un taux fixe entre le dollar et le lev : 1 USD = 1,79549 BGN.*/

function convertor(input) {
	let usd = input[0];
	let bgn = usd * 1.79549;
    console.log(bgn);
}

convertor([22])
convertor([100])
convertor([12.5])

/* Je crée une fonction convertor avec un input vide (les données seront entrées
ultérieurement par l'appelle de la fonction), je déclare le dollar américain ainsi que le 
calcul de la conversion du leva bulgare en dollars et enfin j'affiche dans la console*/