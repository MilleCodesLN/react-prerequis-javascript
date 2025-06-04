"use client"
/* eslint-disable no-unused-vars */
// Fonctions fléchées
// http://localhost:3000/alone/exercise/04.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init('Fonctions fléchées')

// 🐶 E = mc² : Crée une fonction fléchée `calculEnergie` avec les propiétés `masse` et `celerite` (vitesse de la lumière)
// `celerite` aura la valeur par défaut 300000000
//  🤖 utilise `Math.pow(celerite, 2)` pour le calcul du carré
//  🤖 utilise `round` pour arrondir
const calculEnergie = (masse, celerite = 300000000) => {
  return Math.round(masse * Math.pow(celerite, 2));
}
// 🐶 appelle la fonction calculEnergie avec 5 grammes (0.005 kg)
// et affiche le résultat à l'écran avec displayText
displayText(`L'énergie d'une masse de 5 grammes est de ${calculEnergie(0.005)} Joules`);
};
export default () => <App exercice={exercice} />;