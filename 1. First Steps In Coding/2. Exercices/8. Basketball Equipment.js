/* Jesse décide qu'il veut jouer au basketball, mais il a besoin d'équipement pour s'entraîner. Écrivez un programme 
qui calcule les coûts que Jesse aura s'il commence à s'entraîner, en sachant combien s'élèvent les frais 
d'entraînement au basket-ball pour une période de 1 an.  
• Baskets de basket-ball – leur prix est inférieur de 40 % à celui des frais pendant un an 
• Équipe de basket-ball – son prix est 20% moins cher que celui des baskets 
• Basket-ball – son prix est de 1/4 du prix de l'équipe de basket-ball 
• Accessoires de basket-ball – leur prix est de 1/5 du prix du ballon de basket-ball 

À partir de la console, lisez 1 ligne : 
• Les frais annuels d'entraînement de basket-ball – un entier compris entre [0... 9999] */

function basketballTraining (input) {
    const annualTrainingFees = Number(input[0]);
    const basket = annualTrainingFees - (0.4 * annualTrainingFees);
    const equipment = basket - (0.20 * basket);
    const basketball = equipment/4 * 1;
    const accessories = basketball/5 * 1 ;
    const spent = annualTrainingFees + basket + equipment + basketball + accessories;
    console.log(spent);
}

basketballTraining([365])
basketballTraining([550])