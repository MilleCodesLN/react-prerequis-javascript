"use client"
// ESModule Import / Export
// http://localhost:3000/alone/exercise/01.js
import { App } from "../lib/exerciseHelper"
import * as roomHelper from "../exercise/helper/roomHelper";
// 🐶 Importe 'init' et 'displayText' du module qui permet d'afficher un texte dans la page de l'exercice
//  🤖 import displayText, { init } from "../lib/exerciseHelper";
import displayText, { init } from "../lib/exerciseHelper";
// 🐶 Importe le module qui permet de manipuler les pièces
const exercice = () => {
// 🐶 Affiche 'HelloWorld' dans la page grace à la fonction `displayText` importée
// Atention il faut appeler une fois la fonction init avant les appels à displayText
//  🤖 init()
//  🤖 displayText("Hello World")
init();
displayText("Hello World");

// 🐶 Pour la suite de l"exercice il faut aller renseigner le module dans
// `src/helper/roomHelper.js`

// 🐶 Importe tout du module roomHelper
//  🤖 import * as roomHelper from "../helper/roomHelper";

// 🐶 Utilise ces 3 fonctions pour créér les bons libéllés
// 🤖 let lib = "Air de d'un pièce de 2 par 5 donne " + ...
// Utilise displayText pour afficher ces 3 libéllés
let lib = "Air d'une pièce de 2 par 5 donne " + roomHelper.calculAir(2, 5);
displayText(lib);
lib = "Périmètre d'une pièce de 2 par 5 donne " + roomHelper.calculPerimetre(2, 5);
displayText(lib);
lib = "Température maximale est " + roomHelper.TEMP_MAX;
displayText(lib);
};  
export default () => <App exercice={exercice} />;