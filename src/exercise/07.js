"use client"
// Promise aync await
// http://localhost:3000/isolated/final/07.js

import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init("Promise aync await")

  // 🐶 Créeun Promise `calculNombrePair` qui detecte si le paramètre en entrée est un nombre impair
  // utilise modulo pour savoir si un nombre est pair
  // 🤖 if (nombre % 2 == 0)
  const calculNombrePair = (nombre = 0) => {
    return new Promise((resolve, reject) => {
      if (typeof nombre !== "number") {
        reject(new Error("calculNombrePair : Le paramètre doit être un nombre"))
      } else if (nombre % 2 === 0) {
        resolve(`calculNombrePair : ${nombre} est un nombre pair`)
      } else {
        reject(new Error(`calculNombrePair : ${nombre} est un nombre impair`))
      }
    })
  }


  // 🐶 Appelle cette Promise avec les nombres 2 et 3 et gère les cas ok et ko dans la console
calculNombrePair(2).then( e => displayText(`appel promise : ${e}`), err => displayText(`appel promise : ${err}`))
calculNombrePair(3).then( e => displayText(`appel promise : ${e}`), err => displayText(`appel promise : ${err}`))

  // 🐶 Appelle cette Promise en asynchrone
  // 🤖 async function
  // 🤖 await calculNombrePair

  const calculNombrePairAsync = async () => {
    try {
      let result = await calculNombrePair(2)
      displayText(`calculNombrePairAsync : ${result}`)
    
      result = await calculNombrePair(3)
      displayText(`calculNombrePairAsync :  ${result}`) // ne devrait pas logger
    } catch (error) {
      displayText(`calculNombrePairAsync : erreur ${error.message}`)
    }
  }

  calculNombrePairAsync()
}
export default () => <App exercice={exercice} />
