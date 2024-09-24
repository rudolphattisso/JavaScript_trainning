//exercice pdf-4
// let insert = window.prompt("test");
// if (window.confirm("Voulez-vous continuer ?") == true){
//     window.alert("ça va peter");
//     console.log(insert);

// }


//exercice donc 6 conditions;

//-1 modulo de 2 pour determiner si le chiffre est paire ou impaire
//  let a = window.prompt("tdonnez un nombre");
//  if(a%2 ==0 ){
// window.alert("paire")
//  }
//  else{
//     window.alert("impaire")
//  };

//-2 Ecrivez un programme qui demande l’année de naissance à l’utilisateur.
//En réponse votre programme doit afficher l’âge de l’utilisateur et indiquer si l’utilisateur est majeur ou mineur.
// let age = window.prompt("Quel âge avez vous?");
// if(age >= 18){
//     alert("vous êtes majeurs");
// }
// else{
//     alert("vous êtes mineur")
// }


// 3 - Calculette
// Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur '+', '-', '*' ou '/'.
// Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
// Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur "division par 0"), puis affichera le résultat.

// let number1 = parseInt(window.prompt("saisissez le premier nombre"));
// let sign = window.prompt("saisissez l'un des signes suivants '+' , '-' , '/' , '*' ");
// if (sign != '+' && sign != '-' && sign != '/' && sign != '*') {
//     console.log(sign);
//     window.alert("opérateur erroné ' ");
// }
// else {
//     let number2 = parseInt(window.prompt("saisissez le deuxieme nombre"));

//     switch (sign) {
//         case '+':
//             alert(number1 + number2);
//             break;
//         case '-':
//             alert(number1 - number2);
//             break;
//         case '-':
//             alert(number1 * number2);
//             break;
//         case '/':
//             if (number2 == 0) {
//                 window.alert("erreur: division d'un nombre par zero impossible ");
//             } else {
//                 alert(number1 / number2);

//             }

//     }

// }


// 5- Participation
// Un patron décide de calculer le montant de sa participation au prix du repas de ses employés de la façon suivante :
// ▪ si il est célibataire : participation de 20%
// ▪ si il est marié : participation de 25%
// ▪ si il a des enfants : participation de 10% supplémentaires par enfant La participation est plafonnée à 50%
// Si le salaire mensuel est inférieur à 1200 € la participation est majorée de 10%.
// Ecrire le programme qui lit les informations au clavier et affiche pour chaque salarié, la participation à laquelle il a droit.


// let pu = window.prompt('saisissez le prix de l article');
// let qteCom = window.prompt('saisissez le nombre articles');;
// let tot = pu * qteCom;
// let port = 0.02 * tot;
// const limit = 500
// if (port < 6) {
//     port = 6
// }
// let rem = 0;

// if (tot > limit) {
//     port = 0
// }


// if (100 <= tot && tot <= 200) {

//     rem = 0.05 * tot;
// }
// else if (200 < tot) {
//     rem = 0.1 * tot;
// }
// else {
//     rem = 0
// }


// let pap = pu * qteCom + port + rem;
// window.alert('le prix total à payer est de: ' + pap + 'euros💲, \nLe port est:' + port + 'euro(s) 🚚, \n et la remise est de : ' + rem + 'euro(s) 🤑.')
// console.log(tot);



// 5-participation
// Un patron décide de calculer le montant de sa participation au prix du repas de ses employés de la façon suivante :
// ▪ si il est célibataire : participation de 20%
// ▪ si il est marié : participation de 25%
// ▪ si il a des enfants : participation de 10% supplémentaires par enfant La participation est plafonnée à 50%
// Si le salaire mensuel est inférieur à 1200 € la participation est majorée de 10%.
// Ecrire le programme qui lit les informations au clavier et affiche pour chaque salarié, la participation à laquelle il a droit.

// let cPart;
// let mPart;
// let ePart;
// const limPart = 0.5
// const limSalary = 1200;
// const limSalaryPercent = 0.1
// let participation = 0;

// let salary = window.prompt('saissez le salaire');
// if(salary <limSalary){
//     participation += 0.1;

// }
// let isCelibataire = window.confirm('celibataire / marié ?; \n si ok : Celibataire ,si annuler : marié ');
// if ( isCelibataire == true) {
//     participation += 0.2

// }
// else{
//     participation += 0.25

// }

// let numberChild = window.prompt("saissez le nombre d'enfants");
//  participation +=  0.1*numberChild;

//  if(participation> 0.5){
//     participation = 0.5;
//  }

// window.alert(participation*100 +'% de participation  qui équialent à  ' + participation * salary + 'euros.' );


//exercice doc 7
//Exercice1
// Créer une page HTML qui demande à l’utilisateur un prénom.
// La page doit continuer à demander des prénoms à l’utilisateur
//  jusqu’à ce qu’il laisse le champ vide. Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.

// let i = 0;
// let displayFirstName = window.prompt("saisis le prénom n" + parseInt(i + 1) + '\n ou clic sur annuler pour arrêter la saisie');
// let displayFirstNames="";
// for (i = 0; displayFirstName != ""; i++) {


//     displayFirstName =window.prompt("saisis le prénom n" + parseInt(i + 1)+ '\n ou clic sur annuler pour arrêter la saisie');
//     displayFirstNames +=displayFirstName + '\n';
// }


// alert(displayFirstNames);


// 2 - Entiers inférieurs à N
// Ecrivez un programme qui affiche les nombres inférieurs à N.

// let resultat = 0;
// let i = 0;

// do{
//     resultat = 5 * i;
//     alert(resultat);
//     i++
// }while(i<=4);

// 3 - Somme des entiers inférieurs à N
// Ecrivez un programme qui affiche la somme des nombres inférieurs à N.

let numberN = parseInt(window.prompt('saisis N'))
let i = 0
let result = 0;

for(i = N-1; result > -1; i--){
result = numberN + i
alert('le resulat est :' + result);
}





