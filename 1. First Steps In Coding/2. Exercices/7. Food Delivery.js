/* Le restaurant ouvre ses portes et propose plusieurs menus à prix préférentiels :  
• Menu pouconst –  10.35 lv.  
• Menu avec poisson – 12.40 lv.  
• Menu végétarien – 8.15 lv.  
Écrivez un programme qui calcule combien il en coûtera à un groupe de personnes pour commander des plats à 
emporter. 
Le groupe commandera également un dessert dont le prix est égal à 20% de l'addition totale (hors livraison).  
Le prix de la livraison est  de 2,50 BGN et est finalement facturé. 

À partir de la console, lisez 3 lignes : 
• Nombre de menus de pouconst – entier dans l'intervalle [0 ... 99] 
• Nombre de menus avec poisson – entier compris dans l'intervalle [0 ... [99] 
• Nombre de menus végétariens – un entier compris entre [0 ... 99] */

function foodDelivery(input) {
	const chickenMenu = Number(input[0]);
	const fishMenu = Number(input[1]);
	const veganMenu = Number(input[2]);
	const chikenPrice = 10.35;
	const fishPrice = 12.4;
	const veganPrice = 8.15;
	const costDelivery = 2.5;
	const totalPrice =
		chickenMenu * chikenPrice + fishMenu * fishPrice + veganMenu * veganPrice;
	const dessert = 0.2 * totalPrice;
	const costWithDelivery = totalPrice + dessert + costDelivery;
	console.log(`Order price: ${costWithDelivery}€`);
}

foodDelivery([2,4,3])
foodDelivery([9,2,6])