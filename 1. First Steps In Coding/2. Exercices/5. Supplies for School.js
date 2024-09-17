/* L'année scolaire a déjà commencé et la responsable de la classe 10B - Annie doit acheter un certain nombre de 
paquets de produits chimiques, des paquets avec des marqueurs, ainsi qu'un nettoyant pour planches. C'est une 
cliente régulière d'une librairie, il y a donc une réduction pour elle, qui représente un certain pourcentage du 
montant total. Écrivez un programme qui calcule combien d'argent Annie devra collecter pour payer la facture, en 
gardant à l'esprit la liste de prix suivante :  
• Paquet de produits chimiques - 5,80 lv.  
• Paquet de marqueurs - 7.20 lv.  
• Préparation - 1,20 BGN (par litre)

À partir de la console, lisez 4 chiffres : 
• Nombre d'emballages de produits chimiques - entier dans l'intervalle [0...100] 
• Nombre de paquets de marqueurs - entier dans l'intervalle [0...100] 
• Litres de nettoyant pour carte - un entier dans l'intervalle [0... 50]
• Pourcentage de diminution - entier dans l'intervalle [0...100 */

function moneyToSpend(input) {
	let chemicalPackaging = Number(input[0]);
	let markerPacks = Number(input[1]);
	let cardCleaner = Number(input[2]);
	let discount = Number(input[3]);
	let priceOfChemicalPackaging = 5.8;
	let priceOfMarkerPacks = 7.2;
	let priceOfCardCleaner = 1.2;
	let totalPrice =
		chemicalPackaging * priceOfChemicalPackaging +
		markerPacks * priceOfMarkerPacks +
		cardCleaner * priceOfCardCleaner;
	let totalPriceWithDiscount = totalPrice - totalPrice * (discount / 100);
	console.log(totalPriceWithDiscount);
}

moneyToSpend([2,3,4,25])
moneyToSpend([4,2,5,13])

/* ou bien enlever au préalable /100 dans la variable discount et mettre cette var let totalPriceWithDiscount = totalPrice - (dicount/100 * totalPrice); */
