/* Rumen veut repeindre le salon et a engagé des maîtres à cet effet. Écrivez un programme qui calcule le coût de la 
réparation, en tenant compte des prix suivants : 
• Nylon de protection - 1,50 BGN par mètre carré 
• Peinture - 14,50 BGN par litre 
• Diluant de peinture - 5,00 BGN par litre 
Juste au cas où, aux  matériaux nécessaires, Rumen veut ajouter 10% de la quantité de peinture et 2 mètres carrés 
de nylon, bien sûr 0,40 leva pour les sacs. Le montant payé aux maîtres pour 1 heure de travail est égal à 30% de la 
somme de tous les coûts matériels

L'entrée est lue depuis la console et contient exactement 4 lignes : 
1. Quantité de nylon requise (en m²) - un entier compris entre [1... 100] 
2. Quantité de peinture requise (en litres) - un entier compris dans l'intervalle [1... 100] 
3. Quantité de diluant (en litres) - un entier compris dans l'intervalle [1... [30] 
4. Les heures pendant lesquelles les maîtres effectueront le travail - un entier compris dans l'intervalle [1... 9] */

function costOfRepair(input) {
	let quantityOfNylon = Number(input[0]);
	let quantityOfPaint = Number(input[1]);
	let quantityOfDiluent = Number(input[2]);
	let numberOfWorkingHours = Number(input[3]);
	let priceOfNylon = 1.5;
	let priceOfPaint = 14.5;
	let priceOfDiluent = 5.0;
	let priceOfBags = 0.4;
	let totalCost =
		(quantityOfNylon + 2) * priceOfNylon +
		(quantityOfPaint + 0.1 * quantityOfPaint) * priceOfPaint +
		quantityOfDiluent * priceOfDiluent +
		priceOfBags;
	let totalCostWith30Percent =
		(totalCost * 0.3) * numberOfWorkingHours + totalCost;
	console.log(`The sum of all costs is: ${totalCostWith30Percent}€`);
}

costOfRepair([10,11,4,8])
costOfRepair([5,10,10,1])
