/* Écrivez un programme  qui calcule le montant que vous recevrez à la fin de la 
période de dépôt à un certain taux d'intérêt. 

Utilisez la formule suivante :  
Montant = montant déposé + durée du dépôt * (montant déposé * taux d'intérêt annuel) / 12) 

À partir de la console, lisez 3 lignes : 
1. Montant déposé – nombre réel compris entre [100,00 ... 10000.00] 
2. Durée du dépôt (en mois) – un entier compris entre [1... 12] 
3. Taux d'intérêt annuel – nombre réel compris entre [0,00 ... 100.00] 

function EndDeposit(input) {
	let sumDeposit = Number(input[0]);
	let depositDuration = Number(input[1]);
	let annualInterestRate = Number(input[2])/100;
	let sumEndDeposit = sumDeposit + depositDuration * ((sumDeposit * annualInterestRate) / 12);
	console.log(sumEndDeposit);
} */

function endDeposit(input) {
	let sumDeposit = Number(input[0]);
	let depositDuration = Number(input[1]);
	let annualInterestRate = Number(input[2]);
	let interestRate = sumDeposit * annualInterestRate / 100 ;
	let sumEndDeposit = sumDeposit + depositDuration * interestRate / 12;
	console.log(sumEndDeposit);
}
 

endDeposit([200, 3, 5.7]);
endDeposit([2350, 6, 7]);

/* Rappel:

Pour calculer en pourcentage, il ne faut pas ajouter le symbole du pourcentage %,mais il faut bien diviser par 100.
Ex: 5.7/100 = 0.057

1. Nous calculons les intérêts courus : 200 * 0,057 (5,7 %) = 11,40 BGN. 
2. Nous calculons les intérêts pour 1 mois : 11,40 BGN / 12 mois = 0,95 BGN. 
3. Le montant total est de : 200 BGN + 3 * 0,95 BGN = 202,85 BGN */
