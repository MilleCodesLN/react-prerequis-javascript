"use client"
/* eslint-disable no-unused-vars */
// Décomposition et Shorthand property names
// http://localhost:3000/alone/exercise/03.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init('Décomposition et Shorthand property names')

// propiétés d'un terrain de foot
const longueur = 120
const largeur = 90
const type = 'footbal'

// 🐶 Crée un object `terrainFoot` avec les propiétés `longueur` et `largeur` initialisées avec les constantes ci-dessus
// en utilisant les shorthand property names
const terrainFoot = { longueur, largeur, type }

// 🐶 Crée un object `terrainBasket` avec les propiétés `longueur` 28 et `largeur` 15 (sans créer de variables intermédiaires)
const terrainBasket = { longueur: 28, largeur: 15, type: 'basket' }

// 🐶 Crée une fonction `calculAire` avec 1 paramètre : le terrain (utilise la décomposition)
const calculAire = ({ longueur, largeur }) => {
  // 🐶 retourne la surface du terrain (longueur * largeur)
  return longueur * largeur
}       
// 🐶 affiche avec `displayText` : "La surface du terrain de footbal/basket est x m² "
displayText(`La surface du terrain de footbal est ${calculAire(terrainFoot)} m²`)
// 🐶 Appelle cette fonction avec le terrain de footbal puis de basket
displayText(`La surface du terrain de basket est ${calculAire(terrainBasket)} m²`)
};
export default () => <App exercice={exercice} />;