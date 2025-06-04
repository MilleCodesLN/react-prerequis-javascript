"use client"
// JavaScript - Template Literals
// http://localhost:3000/alone/exercise/02.js

// eslint-disable-next-line no-unused-vars
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init('JavaScript - Template Literals')

// 🐶 Crée 3 constantes avec leurs valeurs 5 10 et 200
const number1 = 5;
const number2 = 10;
const number3 = 200;

// 🐶 Utilise la fonction `Math.max` pour trouver le nombre le plus grand
// 📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max
const maxNumber = Math.max(number1, number2, number3);

// 🐶 Affiche le libelé “Le nombre le plus grand entre 5 10 200 est 200 !”
displayText(`Le nombre le plus grand entre ${number1} ${number2} ${number3} est ${maxNumber} !`);
// à l'écran avec 'displayText'
};
export default () => <App exercice={exercice} />;