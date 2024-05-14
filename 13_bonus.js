/**
 
Exercice : Trouver la fréquence des mots dans une phrase
 
Objectif :
Écrire une fonction qui prend en entrée une chaîne de caractères et qui retourne un objet où les clés sont les mots de la phrase et les valeurs sont le nombre de fois où ces mots apparaissent.
 
Consignes :
 
Convertir la phrase en tableau de mots.
Utiliser la méthode .reduce() pour compter la fréquence des mots.
Retourner l'objet avec les fréquences.
 
ex: la pomme est rouge et la banane est jaune
{
  "la": 2,
  "pomme": 1,
  "est": 2,
  "rouge": 1,
  "et": 1,
  "banane": 1,
  "jaune": 1
}
 
*/
 
 
 
 
const countWords = (sentence) => (
  sentence.split(" ").reduce((acc, word) => {
    acc[word] = acc[word] ? acc[word] + 1 : 1;
    return acc;
  }, {})
)
 
console.log(countWords2("la pomme est verte et la banane est blanche"));
/**
Exercice : Trier un objet par valeur
 
Objectif :
Écrire une fonction qui prend en entrée un objet et qui retourne un nouvel objet dont les propriétés sont triées en fonction de leurs valeurs, en ordre croissant.
 
exemple:
{
  "pommes": 3,
  "bananes": 1,
  "cerises": 8
};
 
->
 
{
  "bananes": 1,
  "pommes": 3,
  "cerises": 8
}
 
*/
 
const sortObjectByValue = (obj) => {
  // Convert object into an array of [key, value] pairs
  const entries = Object.entries(obj);
 
  // Sort entries based on their values
  entries.sort((a, b) => a[1] - b[1]);
 
  // Convert the sorted array back into an object
  const sortedObj = entries.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
 
  return sortedObj;
};
 
module.exports = {countWords, sortObjectByValue};
 
// Test the function
console.log(sortObjectByValue({
  "pommes": 3,
  "bananes": 1,
  "cerises": 8
}));