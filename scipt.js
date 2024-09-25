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

// let numberN = parseInt(window.prompt('saisis N'))
// let i = numberN - 1;
// let result = 0;
// while(i> -1){
//     console.log(result);
//     result =  i;
//     i--
// }


// 4 - Somme d'un intervalle(a reprendre)
// Ecrivez un programme qui saisit deux nombres n1 et n2 et qui calcul ensuite la somme des entiers de n1 à n2.

// let n = parseInt(window.prompt("saisis le nmbre N, borne de inferieur de l'interval"));
// let m = parseInt(window.prompt("saisis le nmbre M,, borne de inferieur de l'interval"));
// let result= 0;

// for nombre in Range(n1, n2 + 1)
// while(n=m-1){

//     console.log(result);
//     result += n+(n+1);
//     n++
// }


// 5 - Moyenne
// Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0); 
//ici on ajoute plusieurs fois N

// let n ;
// let m = 0;

// let displayResult; 
// let i;
// let moyenne= 0;
// let somme = 0;
// let nbNote =0;

// while(n != 0){

//  n = parseInt(window.prompt("saisis le nmbre N"));
// somme += n; 

// nbNote++;

// }
// moyenne = somme/nbNote;
// window.alert('la moyenne est:' +moyenne+ 'et la sommme est:'+somme ) ;


// }

// 6- Mini et maxi
// Modifiez le programme de la moyenne pour afficher le minimum et le maximum;

// let n;
// let displayResult;
// let i;
// let moyenne = 0;
// let somme = 0;
// let nbNote = 0;
// let min=-1;
// let max=-1;


// while (n != 0) {

//     n = parseInt(window.prompt("saisis le nmbre N"));
//     if (n != 0) {
//         if (min > n || min==-1) {
//             min = n;
//         }
//         else if (max < n || max==-1) {
//             max = n
//         }

//         somme += n;

//         nbNote++;
//     }


// }
// moyenne = somme / nbNote;
// window.alert('la moyenne est:' + moyenne + '\nla sommme est:' + somme + '\nle min est:' + min + "\nle max est " + max + ".");


// 7 - Multiples
// Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant
// entrésau clavier.
// Exemple pour N=5 et X=7 :
// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21
// 4 x 7 = 28
// 5 x 7 = 35
// Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au
// pro-blème.
// On ne demande pas pour le moment de gérer les débordements (overflows) dus à des demandes
// decalcul dépassant la capacité de la machine.


// let X;
// let N;
// let result= 0;
// let i;

// N = parseInt(window.prompt("saisis le nmbre N"));
// X = parseInt(window.prompt("saisis le nmbre X"));

// for(i=0; i<=N; i++){

//     result = i * X ;
//     console.log(result);

// }   



// 8 - Nombre de voyelles.
// Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :
// ▪ myVar.length : retourne le nombre de lettres de la chaîne myVar.
// ▪ myVar.substr(p,n): extrait d’une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, le 1er caractère se trouve à la position 0)
// ▪ myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaine dans la variable myVar donnée (si non trouvé : -1).


// let voyelles = "aeiouyAEIOUY";
// let word = window.prompt("saisissez un mot");
// let countVoyels = 0;

// //methode 1: considérons word comme étant un tableau;

// for (let i = 0; i < word.length; i++) {
//     //  test pour voir l'isolation de chaque caractères
//     console.log(word[i]);

//      // isoltion de chaque caractères contenus dans voyelles
//     for (let j = 0; j < voyelles.length; j++) {
//      // comparaison des caractères isolés dans les varalibles word et voyelle; si il y a concordence, incrémenter countvoyelle
//         if (word[i] == voyelles[j]) {
//             countVoyels++
//         }
//     }


// }

// // même resolution avec la methode substring; 
// for (let i = 0; i < word.length; i++) {
   

//     for (let j = 0; j < voyelles.length; j++) {
//         if (word.substring(i,1) == voyelles.substring(j,1)) {
//             countVoyels++
//         }
//     }


// }

// alert(countVoyels);

// 9 - Calcul du nombre de jeunes, de moyens et de vieux.(j'ai volontairement rajouté des éléments non demandé dans le cadre de mes tests pour obtenir de valeurs en plus)
// Il s’agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge stric- tement supérieur à 40 ans 
//et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).
// Le programme doit demander les âges successifs.
// Le comptage est arrêté dès la saisie d’un centenaire. Le centenaire est compté. Donnez le programme Javascript correspondant qui affiche les résultats.


// let minorPerson = [];
// let countMinor=0;
// let majorPersonBetween = [];
// let countMiddle = 0;
// let majorPersonSuperior = [];
// let countHigh=0;
// let age=0;
// let i=1
// age = parseInt(window.prompt('quel est votre age'));

// while(age < 100 ){
    
//     console.log(age);

//     if(age < 20 ){
//         minorPerson.push(age);
//         console.log('minor:' + minorPerson)
//         countMinor++;
//     }

//     else if(age > 40 && age <=100){
//         majorPersonSuperior.push(age);
//         console.log('high:' + majorPersonSuperior)
//         countHigh++;
    
//     }else{
//         majorPersonBetween.push(age);
//         console.log('between:' + majorPersonBetween);
//         countMiddle++;
//     }

//     i++; 

//     age = window.prompt('quel est votre age n°'+i);
// }

// majorPersonSuperior.push(age);
// countHigh++

// alert('mineur '  +minorPerson +'(' +countMinor+')'+ ' middle ' +majorPersonBetween+ '(' +countMiddle+')'+' high '+ majorPersonSuperior + '(' + countHigh +')');



// 10 - Un nombre est-il premier
// Ecrivez un programme qui permet de tester si un nombre est premier.





//11-Ecrire un programme qui met en oeuvre le jeu du nombre magique :
// L’ordinateur choisit un nombre aléatoire et l’utilisateur doit trouver ce nombre. A chaque fois que l’utilisateur saisit une valeur, 
// il reçoit une indication lui indiquant « plus petit » ou « plus grand ».
// Vous aurez besoin de générer un nombre aléatoire avec la fonction random de l’objet Math :
// Utilisez alert pour afficher les messages « Trop grand » ou « Trop petit », prompt pour demander une valeur à l’utilisateur et confirm pour lui demander de rejouer

// let magic = parseInt(Math.random()*100);
// let myNumber =  parseInt(window.prompt('rentrez votre nombre'))
// console.log(magic);
// let isContinue = true


// while(myNumber != magic){

//     if(myNumber > magic){
//         alert('plus grand')

//     }
//     else if(myNumber < magic){
//         alert('plus petit')
//     }

// isContinue = window.confirm('voulez vous continuer?')

// if  (isContinue==true){
//      myNumber =  parseInt(window.prompt('rentrez votre nombre'));
// }else{
//     myNumber = magic
// }

// }
